let content = document.getElementById("contents");

getUserData();

async function getUserData(filterName){
    fetch('https://dummyjson.com/users?limit=20')
        .then(response => response.json())
        .then(data => {
            showData(data,filterName);
        });
}


async function showData(data, filterName){
    let div = document.createElement("table")
    let row = document.createElement("tr")
    let name = document.createElement("th");
    let secondName = document.createElement("th");
    let country = document.createElement("th");
    let temp = document.createElement("th");
    let fav = document.createElement("th");
    name.textContent = "Primer nombre";
    secondName.textContent = "Segundo Nombre";
    country.textContent = "Ciudad";
    temp.textContent = "Temperatura (C)";
    fav.textContent = "Favoritos";
    row.append(name);
    row.append(secondName);
    row.append(country);
    row.append(temp);
    row.append(fav);
    div.append(row)

    data.users.forEach(user => {
        if(filterName == null || filterName == ""){
            let row = document.createElement("tr")
            let name = document.createElement("td");
            let secondName = document.createElement("td");
            let country = document.createElement("td");
            let fav = document.createElement("input")
            let temp = document.createElement("td");
            temp.textContent = loadTemp(user.address.city);   
            name.textContent = user.firstName;
            secondName.textContent = user.lastName;
            country.textContent = user.address.city;
            
            fav.type = "checkbox"
            fav.onclick = favorites(user.lastName,user.firstName)

            row.append(name);
            row.append(secondName);
            row.append(country);
            row.append(temp);
            row.append(fav);
            div.append(row);
        }if(filterName == user.firstName){
          let temp = document.createElement("td");
            temp.textContent = loadTemp(user.address.city);   
            let row = document.createElement("tr")
            let name = document.createElement("td");
            let secondName = document.createElement("td");
            let country = document.createElement("td");
            let fav = document.createElement("input")
            fav.type = "checkbox"
            fav.onclick = favorites(user.lastName,user.firstName)
            name.textContent = user.firstName;
            secondName.textContent = user.lastName;
            country.textContent = user.address.city;
            row.append(name);
            row.append(secondName);
            row.append(country);
            row.append(temp);
            row.append(fav);
            div.append(row);
        }
    });

    content.append(div);
} 

async function loadTemp(userCity){
    let url = "https://wttr.in/DALLAS?format=j1";
    switch(userCity){
        case "Phoenix":
            url = "https://wttr.in/DALLAS?format=j1";
            const response = await fetch(url);
            const data = await response.json()
            return console.log(data.current_condition[0].FeelsLikeC);
        case "Houston":
            url = "https://wttr.in/HOUSTON?format=j1"
            const response2 = await fetch(url);
            const data2 = await response2.json()
            return console.log(data2.current_condition[0].FeelsLikeC);          
        case "Washington":
            const response3 = await fetch("https://wttr.in/WASHINGTON?format=j1");
            const data3 = await response3.json()
            return console.log(data3.current_condition[0].FeelsLikeC); 
    }
}

function favorites(user,name){
    localStorage.setItem(user,name);
}

function filterName(){
    content.innerHTML="";
    getUserData(document.getElementById("filterName").value);
}

function blackBG(white){
    document.body.style = "background-color: black;"
    content.style = "color:white;"
    document.getElementById("blackButton").style = "display:none;";
    document.getElementById("whiteButton").style = "display:inline;";
}

function whiteBG(white){
    document.body.style = "background-color: white;"
    content.style = "color:black;"
    document.getElementById("blackButton").style = "display:inline;";
    document.getElementById("whiteButton").style = "display:none;";
} 