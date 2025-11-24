document.getElementById("generate").addEventListener("click", function(event){
    event.preventDefault();
    generate();
});

function generate() {
    /* Mapa base */
    const mapSize = parseInt(document.getElementById("mapSize").value);
    const maxOcupedArea = parseFloat(document.getElementById("maxOcupedArea").value);

    /* Naturaleza */
    const natMinZones = parseInt(document.getElementById("natMinZones").value);
    const natMaxZones = parseInt(document.getElementById("natMaxZones").value);
    const natMaxSize = parseInt(document.getElementById("natMaxSize").value);
    const natTotalMaxSize = parseInt(document.getElementById("natTotalMaxSize").value);

    /* Urbano */
    const urbMinZones = parseInt(document.getElementById("urbMinZones").value);
    const urbMaxZones = parseInt(document.getElementById("urbMaxZones").value);
    const urbMaxSize = parseInt(document.getElementById("urbMaxSize").value);
    const urbTotalMaxSize = parseInt(document.getElementById("urbTotalMaxSize").value);

    /* Comercial */
    const comMinZones = parseInt(document.getElementById("comMinZones").value);
    const comMaxZones = parseInt(document.getElementById("comMaxZones").value);
    const comMaxSize = parseInt(document.getElementById("comMaxSize").value);
    const comTotalMaxSize = parseInt(document.getElementById("comTotalMaxSize").value);

    if(validator(mapSize, maxOcupedArea, natMinZones, natMaxZones, natMaxSize, natTotalMaxSize,urbMinZones, urbMaxZones, urbMaxSize, urbTotalMaxSize,comMinZones, comMaxZones, comMaxSize, comTotalMaxSize)) {        
        console.log("Mapa generado con tamaño:", mapSize);

        createWorld(mapSize, maxOcupedArea, natMinZones, natMaxZones, natMaxSize, natTotalMaxSize,urbMinZones, urbMaxZones, urbMaxSize, urbTotalMaxSize,comMinZones, comMaxZones, comMaxSize, comTotalMaxSize);
    }
}

function validator(mapSize,maxOcupedArea,natMinZones,natMaxZones,natMaxSize,natTotalMaxSize,urbMinZones,urbMaxZones,urbMaxSize,urbTotalMaxSize,comMinZones,comMaxZones,comMaxSize,comTotalMaxSize){

    const rules = [
        [mapSize > 0, "Tamaño incompatible de mapa"],
        [maxOcupedArea > 0 && maxOcupedArea <= 100, "Tamaño incompatible de áreas ocupadas máximas del mapa"],
        [natMinZones >= 0, "Tamaño mínimo de zonas de naturaleza incompatible"],
        [natMaxZones > 0 && natMaxZones >= natMinZones, "Tamaño máximo de zonas de naturaleza incompatible"],
        [natMaxSize > 0, "Tamaño máximo de zonas de naturaleza incompatible"],
        [natTotalMaxSize > 0, "Tamaño total máximo de zonas de naturaleza incompatible"],
        [urbMinZones >= 0, "Tamaño mínimo de zonas urbanas incompatible"],
        [urbMaxZones > 0 && urbMaxZones >= urbMinZones, "Tamaño máximo de zonas urbanas incompatible"],
        [urbMaxSize > 0, "Tamaño máximo de zonas urbanas incompatible"],
        [urbTotalMaxSize > 0, "Tamaño total máximo de zonas urbanas incompatible"],
        [comMinZones >= 0, "Tamaño mínimo de zonas comerciales incompatible"],
        [comMaxZones > 0 && comMaxZones >= comMinZones, "Tamaño máximo de zonas comerciales incompatible"],
        [comMaxSize > 0, "Tamaño máximo de zonas comerciales incompatible"],
        [comTotalMaxSize > 0, "Tamaño total máximo de zonas comerciales incompatible"],
    ];

    for (const [condition, message] of rules) {
        if (!condition) {
            alert(message);
            return false;
        }
    }

    return true;
}

function createWorld(mapSize, maxOccupiedArea,
    natMinZones, natMaxZones, natMaxSize, natTotalMaxSize,
    urbMinZones, urbMaxZones, urbMaxSize, urbTotalMaxSize,
    comMinZones, comMaxZones, comMaxSize, comTotalMaxSize) {

    const world = document.getElementById("world");
    world.innerHTML = '';
    world.style.gridTemplateColumns = `repeat(${mapSize}, 1fr)`;
    world.style.gridTemplateRows = `repeat(${mapSize}, 1fr)`;

    // Crear mapa vacío
    const map = [];
    for (let y = 0; y < mapSize; y++) {
        map[y] = [];
        for (let x = 0; x < mapSize; x++) {
            map[y][x] = null;
        }
    }

    // 1) Generar una sola isla conectada
    const totalCells = mapSize * mapSize;
    const islandSize = Math.floor(totalCells * maxOccupiedArea);
    const islandCells = generateSingleIsland(mapSize, islandSize);

    // Marcar isla como terreno base "T"
    for (const c of islandCells) {
        map[c.y][c.x] = "T";
    }

    // 2) Pintar interior con N/U/C dentro de la misma masa
    paintZonesInSingleMass(map, mapSize);

    // 3) Render del mapa
    for (let y = 0; y < mapSize; y++) {
        for (let x = 0; x < mapSize; x++) {
            const div = document.createElement("div");
            div.className = "cell";

            switch (map[y][x]) {
                case "N": div.style.backgroundColor = "green"; break;
                case "U": div.style.backgroundColor = "gray"; break;
                case "C": div.style.backgroundColor = "yellow"; break;
                case "T": div.style.backgroundColor = "white"; break;
                default:  div.style.backgroundColor = "white"; break;
            }

            world.appendChild(div);
        }
    }
}



// ========================================================================
// A) Genera UNA SOLA ISLA grande, continua, sin fragmentarse (GARANTIZADO)
// ========================================================================
function generateSingleIsland(mapSize, islandSize) {
    const start = {
        x: Math.floor(mapSize / 2),
        y: Math.floor(mapSize / 2),
    };

    const island = [start];
    const queue = [start];
    const visited = new Set();
    visited.add(start.x + "," + start.y);

    while (island.length < islandSize && queue.length > 0) {
        const cell = queue.shift();

        const dirs = [
            [1, 0], [-1, 0], [0, 1], [0, -1],
            [1, 1], [1, -1], [-1, 1], [-1, -1]
        ];

        shuffleArray(dirs);

        for (const [dx, dy] of dirs) {
            const nx = cell.x + dx, ny = cell.y + dy;

            if (nx >= 0 && nx < mapSize && ny >= 0 && ny < mapSize) {
                const key = nx + "," + ny;

                if (!visited.has(key)) {
                    visited.add(key);
                    const node = { x: nx, y: ny };
                    island.push(node);
                    queue.push(node);

                    if (island.length >= islandSize) break;
                }
            }
        }
    }

    return island;
}



// ========================================================================
// B) Rellena la isla con Naturaleza / Urbano / Comercial de forma orgánica
// ========================================================================
function paintZonesInSingleMass(map, mapSize) {

    for (let y = 0; y < mapSize; y++) {
        for (let x = 0; x < mapSize; x++) {

            if (map[y][x] === "T") {

                const r = Math.random();

                if (r < 0.65) map[y][x] = "N";      // 65% Naturaleza
                else if (r < 0.85) map[y][x] = "U"; // 20% Urbano
                else map[y][x] = "C";               // 15% Comercial
            }
        }
    }
}



// ========================================================================
// Utilidad
// ========================================================================
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}