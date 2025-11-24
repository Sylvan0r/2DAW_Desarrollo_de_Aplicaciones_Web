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

function createWorld(mapSize, maxOcupedArea, natMinZones, natMaxZones, natMaxSize, natTotalMaxSize, urbMinZones, urbMaxZones, urbMaxSize, urbTotalMaxSize, comMinZones, comMaxZones, comMaxSize, comTotalMaxSize) { 

    const world = document.getElementById("world");
    world.innerHTML = '';
    world.style.gridTemplateColumns = `repeat(${mapSize}, 1fr)`;
    world.style.gridTemplateRows = `repeat(${mapSize}, 1fr)`;

    const map = [];
    for (let y = 0; y < mapSize; y++) {
        map[y] = [];
        for (let x = 0; x < mapSize; x++) {
            map[y][x] = null;
        }
    }

    // ---------------------------
    // 2️⃣ Funciones auxiliares
    // ---------------------------
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function findRandomEmptyCell() {
        const empty = [];
        for (let y = 0; y < mapSize; y++) {
            for (let x = 0; x < mapSize; x++) {
                if (!map[y][x]) empty.push({x, y});
            }
        }
        if (empty.length === 0) return null;
        return empty[getRandomInt(0, empty.length - 1)];
    }

    function getEmptyNeighbors(x, y) {
        const neighbors = [];
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        for (let [dx,dy] of dirs) {
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < mapSize && ny >= 0 && ny < mapSize) {
                if (!map[ny][nx]) neighbors.push({x: nx, y: ny});
            }
        }
        return neighbors;
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    function generateZones(type, minZones, maxZones, maxSize, totalMaxSize) {
        let numZones = getRandomInt(minZones, maxZones);
        let totalFilled = 0;

        for (let z = 0; z < numZones; z++) {
            if (totalFilled >= totalMaxSize) break;

            let size = Math.min(getRandomInt(1, maxSize), totalMaxSize - totalFilled);
            let seed = findRandomEmptyCell();
            if (!seed) break;

            let queue = [seed];
            map[seed.y][seed.x] = type;
            totalFilled++;

            while (queue.length && totalFilled < totalMaxSize && size > 1) {
                let cell = queue.shift();
                let neighbors = getEmptyNeighbors(cell.x, cell.y);
                shuffleArray(neighbors);

                for (let n of neighbors) {
                    map[n.y][n.x] = type;
                    queue.push(n);
                    totalFilled++;
                    size--;
                    if (size <= 1) break;
                }
            }
        }
    }

    // ---------------------------
    // 3️⃣ Generar zonas
    // ---------------------------
    generateZones("N", natMinZones, natMaxZones, natMaxSize, natTotalMaxSize);
    generateZones("U", urbMinZones, urbMaxZones, urbMaxSize, urbTotalMaxSize);
    generateZones("C", comMinZones, comMaxZones, comMaxSize, comTotalMaxSize);

    // ---------------------------
    // 4️⃣ Renderizar mapa en DOM
    // ---------------------------
    for (let y = 0; y < mapSize; y++) {
        for (let x = 0; x < mapSize; x++) {
            const cellDiv = document.createElement("div");
            cellDiv.className = "cell";
            switch(map[y][x]) {
                case "N": cellDiv.style.backgroundColor = "green"; break;
                case "U": cellDiv.style.backgroundColor = "gray"; break;
                case "C": cellDiv.style.backgroundColor = "yellow"; break;
                default: cellDiv.style.backgroundColor = "white";
            }
            world.appendChild(cellDiv);
        }
    }
}