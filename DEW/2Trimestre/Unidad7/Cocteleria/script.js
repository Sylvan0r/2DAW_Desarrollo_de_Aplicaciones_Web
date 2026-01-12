let rums = [];
let cart = [];

getDataAndShowData();

function getDataAndShowData() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum")
        .then(response => response.json())
        
        .then(data => {
            if (data.drinks) {
                rums = data.drinks.filter(drinks => drinks.strDrink);
            } else {
                rums = [];
            }
        })

        .then(() => {
            let rows = [];
            for (let i = 0; i < rums.length; i += 4) {
                let row = rums.slice(i, i + 4).map(drink => {
                    return `
                        <div class="col-sm-3 mb-4">
                            <div class="card" style="width: 18rem;">
                                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" class="card-img-top">    
                                <div class="card-body">
                                    <h5 class="card-title">${drink.strDrink}</h5>
                                    <p class="card-text">ID: ${drink.idDrink}</p>
                                    <button class="btn btn-primary" onclick="addToCart('${drink.strDrink}', '${drink.strDrinkThumb}', '${drink.idDrink}')">Comprar</button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
                rows.push(`<div class="row">${row}</div>`);
            }
            document.getElementById("rums").innerHTML = rows.join('');
        })
}

function addToCart(name, image, id){
    const value = name+" ,"+image+' ,'+id;
    let previousVal = getCart();
    if(previousVal){
        previousVal += value;
    }else{
        previousVal = value;
    }

    document.cookie = `cart=${previousVal}`;
}

function getCart(){
    const nameEQ = "cart=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return JSON.parse(c.substring(nameEQ.length)); // Convertir la cadena JSON de vuelta en un array
        }
    }
    return []; // Si no existe la cookie, devolver un carrito vacío
}