document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

let allCharacters = [];

/* INICIALIZACIÓN */
function initApp() {
    handleVisits();
    getInfoChars();

    document.getElementById("searchInput").addEventListener("input", filterCharacters);
    document.getElementById("affiliationFilter").addEventListener("change", filterCharacters);

    // BOTÓN LIMPIAR FAVORITOS (ID CORRECTO)
    document.getElementById("clearFavs").addEventListener("click", clearFavorites);
}

/* FETCH PERSONAJES */
function getInfoChars() {
    fetch("https://dragonball-api.com/api/characters?limit=78")
        .then(res => res.json())
        .then(data => {
            allCharacters = data.items || [];
            loadAffiliations(allCharacters);
            showInfoChars(allCharacters);
            updateStats();
        })
        .catch(err => console.error("Error en la descarga:", err));
}

/* RENDER */
function showInfoChars(characters) {
    const container = document.getElementById("contents");
    container.innerHTML = "";

    characters
        .map(item => createCharacterCard(item))
        .forEach(card => container.appendChild(card));
}

/* CREAR TARJETA DE PERSONAJE */
function createCharacterCard(item) {
    const card = document.createElement("div");
    card.className =
        "bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 flex flex-col";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "w-full h-72 object-contain bg-gray-700 p-6";

    const body = document.createElement("div");
    body.className = "p-5 flex flex-col flex-grow";

    const title = document.createElement("h3");
    title.className =
        "text-2xl font-bold text-yellow-500 mb-1 uppercase tracking-tighter";
    title.textContent = item.name;

    const race = document.createElement("p");
    race.className =
        "text-xs font-semibold bg-orange-900 text-orange-200 px-2 py-1 rounded uppercase w-fit mb-4";
    race.textContent = item.race;

    const btnContainer = document.createElement("div");
    btnContainer.className = "flex gap-2 mt-auto";

    const detailsBtn = document.createElement("button");
    detailsBtn.textContent = "Detalles";
    detailsBtn.className =
        "flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition-colors";

    const favBtn = document.createElement("button");
    const favActive = isFavorite(item.id);
    favBtn.textContent = favActive ? "★" : "☆";
    favBtn.className = favActive
        ? "px-4 py-2 rounded-lg font-bold bg-yellow-500 text-gray-900"
        : "px-4 py-2 rounded-lg font-bold bg-gray-600 text-white";

    const details = document.createElement("div");
    details.className =
        "hidden mt-4 p-3 bg-gray-900 rounded-lg text-sm border-l-4 border-orange-500";

    const ki = document.createElement("p");
    ki.className = "text-gray-300";
    ki.innerHTML = `<strong>KI:</strong> <span class="text-orange-400">${item.ki}</span> | <strong>Max:</strong> ${item.maxKi}`;

    const desc = document.createElement("p");
    desc.className = "text-gray-400 italic text-xs mt-2";
    desc.textContent =
        item.description || "No hay descripción disponible.";

    detailsBtn.addEventListener("click", () => {
        details.classList.toggle("hidden");
    });

    favBtn.addEventListener("click", () => {
        toggleFavorite(item.id, favBtn);
    });

    details.append(ki, desc);
    btnContainer.append(detailsBtn, favBtn);
    body.append(title, race, btnContainer, details);
    card.append(img, body);

    return card;
}

/* FILTRAR */
function filterCharacters() {
    const searchText = document
        .getElementById("searchInput")
        .value.toLowerCase();
    const affiliation =
        document.getElementById("affiliationFilter").value;

    const filtered = allCharacters.filter(char => {
        const matchText =
            char.name.toLowerCase().includes(searchText) ||
            char.race.toLowerCase().includes(searchText);

        const matchAff =
            affiliation === "" || char.affiliation === affiliation;

        return matchText && matchAff;
    });

    showInfoChars(filtered);
}

/* CARGAR AFILIACIONES */
function loadAffiliations(characters) {
    const select = document.getElementById("affiliationFilter");
    select.innerHTML = `<option value="">Todas las afiliaciones</option>`;

    const affiliations = [...new Set(characters.map(c => c.affiliation))];

    affiliations.forEach(aff => {
        const option = document.createElement("option");
        option.value = aff;
        option.textContent = aff;
        select.appendChild(option);
    });
}

/* FAVORITOS */
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

function isFavorite(id) {
    return getFavorites().includes(id);
}

function toggleFavorite(id, btn) {
    let favorites = getFavorites();

    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
        btn.textContent = "☆";
        btn.className =
            "px-4 py-2 rounded-lg font-bold bg-gray-600 text-white";
    } else {
        favorites.push(id);
        btn.textContent = "★";
        btn.className =
            "px-4 py-2 rounded-lg font-bold bg-yellow-500 text-gray-900";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateStats();
}

/* IMPIAR FAVORITOS */
function clearFavorites() {
    localStorage.removeItem("favorites");
    showInfoChars(allCharacters);
    updateStats();
}

/* SESSION STORAGE */
function handleVisits() {
    let visits = sessionStorage.getItem("visits") || 0;
    visits = parseInt(visits) + 1;

    sessionStorage.setItem("visits", visits);
    document.getElementById(
        "visitCount"
    ).textContent = `⚡ Energía de Sesión: ${visits}000 KI`;
}

/* ESTADÍSTICAS */
function updateStats() {
    const favs = getFavorites().length;
    document.getElementById(
        "statsBox"
    ).textContent = `Favoritos activos: ${favs}`;
}