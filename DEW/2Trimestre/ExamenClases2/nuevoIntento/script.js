let content = document.getElementById("contents");

getUserData();

async function getUserData(filterName){
    const response = await fetch('https://dummyjson.com/users?limit=20');
    const data = await response.json();
    showData(data, filterName);
}

async function showData(data, filterName){
    let table = document.createElement("table");

    // Cabecera
    let headerRow = document.createElement("tr");
    const headers = ["Primer nombre", "Segundo nombre", "Ciudad", "Temperatura (°C)", "Favoritos"];

    headers.forEach(text => {
        let th = document.createElement("th");
        th.textContent = text;
        headerRow.append(th);
    });

    table.append(headerRow);

    for (const user of data.users) {

        if (filterName && filterName !== user.firstName) continue;

        let row = document.createElement("tr");

        let name = document.createElement("td");
        let secondName = document.createElement("td");
        let city = document.createElement("td");
        let temp = document.createElement("td");
        let fav = document.createElement("input");

        name.textContent = user.firstName;
        secondName.textContent = user.lastName;
        city.textContent = user.address.city;

        temp.textContent = "Cargando...";
        const temperature = await loadTemp(user.address.city);
        temp.textContent = temperature + " °C";

        fav.type = "checkbox";
        fav.onclick = () => favorites(user.lastName, user.firstName);

        row.append(name, secondName, city, temp, fav);
        table.append(row);
    }

    content.innerHTML = "";
    content.append(table);
}

async function loadTemp(userCity){
    try {
        const cityUpper = encodeURIComponent(userCity.toUpperCase());
        const response = await fetch(`https://wttr.in/${cityUpper}?format=j1`);
        const data = await response.json();

        return data.current_condition[0].FeelsLikeC;
    } catch (error) {
        console.error("Error cargando temperatura:", error);
        return "N/A";
    }
}

function favorites(user, name){
    localStorage.setItem(user, name);
}

function filterName(){
    content.innerHTML = "";
    getUserData(document.getElementById("filterName").value);
}

function blackBG(){
    document.body.style.backgroundColor = "black";
    content.style.color = "white";
    document.getElementById("blackButton").style.display = "none";
    document.getElementById("whiteButton").style.display = "inline";
}

function whiteBG(){
    document.body.style.backgroundColor = "white";
    content.style.color = "black";
    document.getElementById("blackButton").style.display = "inline";
    document.getElementById("whiteButton").style.display = "none";
}
