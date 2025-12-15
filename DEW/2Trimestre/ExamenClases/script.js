let product1 = {name:"TEST",conten:"TEST",cost:1000,cantidad:1};
let product2 = {name:"TEST2",conten:"TEST2",cost:2000,cantidad:1};
let Products = [product1, product2];
let test2 = [];
let total=0;

// Mostrar los productos
document.getElementById("products").innerHTML = "<tr><th>Name</th><th>Content</th><th>Value</th><th></th></tr>";
for(let i = 0; i < Products.length; i++) {
    document.getElementById("products").innerHTML += "<tr><td>" + Products[i].name + "</td><td>" + Products[i].conten + "</td><td>" + Products[i].cost + "</td><td><button onclick='purchase(" + i + ")'>Comprar</button></td></tr>";
}

// Función de compra
function purchase(index) {
    if(!test2.includes(Products[index])){
        test2.push(Products[index]);
        updatePurchaseTable()
    }else{
        for(let i = 0;i<test2.length;i++){
            if(test2[i] == Products[index]){
                test2[i].cantidad +=1;
                updatePurchaseTable()
            }
        }
    }
}

// Actualizar la tabla de compras
function updatePurchaseTable() {
    document.getElementById("purchase").innerHTML = "<tr><th>Name</th><th>Content</th><th>Value</th><th>Cantidad</th><th>Tipo</th><th>Precio</th></tr>"; // Limpiar la tabla antes de agregar los productos

    for (let i = 0; i < test2.length; i++) {
        let price = test2[i].cost;
        let discountPrice = price;

        // Si el comprador es una empresa, aplicar el 20% de descuento
        if (test2[i].tipoComprador === "empresa") {
            discountPrice = price * 0.8; // 20% de descuento
        }

        document.getElementById("purchase").innerHTML += "<tr><td>" + test2[i].name + "</td><td>" + test2[i].conten + "</td><td>" + price + "</td><td>" + test2[i].cantidad + "</td><td>" +
            "<input type='radio' name='buyerType" + i + "' value='persona' " + (test2[i].tipoComprador === "persona" ? "checked" : "") + " onclick='changeBuyerType(" + i + ", \"persona\")'> Persona " +
            "<input type='radio' name='buyerType" + i + "' value='empresa' " + (test2[i].tipoComprador === "empresa" ? "checked" : "") + " onclick='changeBuyerType(" + i + ", \"empresa\")'> Empresa" +
            "</td><td>" + discountPrice.toFixed(2) + "</td></tr>";
        
        total+=test2[i].cost;

        document.getElementById("total").innerHTML = "Se va a pagar un total de: "+total;
    }
}

// Función para cambiar el tipo de comprador
function changeBuyerType(index, tipo) {
    test2[index].tipoComprador = tipo;  // Cambiar el tipo de comprador (persona o empresa)
    updatePurchaseTable();  // Actualizar la tabla con el nuevo tipo
}