let rums = [];
let cart = [];

getDataAndShowData();
contentOffcanvasCart();

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
    let cart = getCart();
    if(cart[id]){
        cart[id].quantity += 1;
    }else{
        cart[id] = {name, image, quantity: 1};
    }
    setCookie("cart", JSON.stringify(cart), 7);
    contentOffcanvasCart();
    window.location.reload();
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + (value || "") + "; expires="  + date.toUTCString() + "; path=/";
}

function getCart(){
    let cart = {};
    const nameEQ = "cart=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            cart = JSON.parse(c.substring(nameEQ.length));
        }
    }
    return cart;
}

function clearCart(){
    setCookie("cart", JSON.stringify({}), 7);
}

function contentOffcanvasCart(){
    let cart = getCart();
    let content = "<h5>Carrito de Compras</h5><ul>";
    for (let id in cart) {
        content += `<li><img src="${cart[id].image}" alt="${cart[id].name}"class="img-thumbnail"> ${cart[id].name} - Cantidad: ${cart[id].quantity}</li>`;
    }
    content += "</ul>";
    content += '<button class="btn btn-success w-100 mt-3" onclick="descargarPDF()">Descargar PDF</button>';
    document.querySelector(".offcanvas-body").innerHTML = content;
}

function descargarPDF(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let cart = getCart();
    
    doc.text("Resumen de tu Pedido", 10, 10);
    let y = 20;
    
    for (let id in cart) {
        doc.text(`- ${cart[id].name} (Cant: ${cart[id].quantity})`, 10, y);
        y += 10;
    }
    
    doc.save("pedido_cocteles.pdf");
}