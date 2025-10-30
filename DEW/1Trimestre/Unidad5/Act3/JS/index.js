document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    if(validator() == true){
        crear();
    }
})

class form {
    constructor(date,cook,consumer,weight,numAccount){
        this.date = date;
        this.cook = cook;
        this.consumer = consumer;
        this.composition;
        this.weight = weight;
        this.numAccount = numAccount;
    }
};

function validator(){
    let date = document.getElementById("date").value;
    let chef = document.getElementById("chef").value;
    let consumer = document.getElementById("consumer").value;
    let weight = document.getElementById("weight").value;
    let numAccount = document.getElementById("numAccount").value;

    let chefPattern = /^[A-Z]{2}\W\d{4}$/;
    let consumerPattern = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;

    if(date != ""){
        if(chef != "" && chefPattern.test(chef)){
            if(consumer != "" && consumerPattern.test(consumer)){
                if(weight != "" && weight>=100 && weight<=5000){
                    if(numAccount != ""){
                        document.getElementById("error").innerHTML = "";
                        return true;
                    }else{
                        document.getElementById("error").innerHTML = "Error de numero de cuenta"
                        return false;
                    }
                }else{
                    document.getElementById("error").innerHTML = "Error de peso"
                    return false;
                }
            }else{
                document.getElementById("error").innerHTML = "Error de consumidor o su formato"
                return false;
            }
        }else{
            document.getElementById("error").innerHTML = "Error de chef o su formato"
            return false;
        }
    }else{
        document.getElementById("error").innerHTML = "Error de fecha"
        return false;
    }
}

let datos = [];

function crear(){
    let compositionPattern = /^\d+g[A-Z]{1,2}\d*[A-Z]{1,2}\d*$/;
    let composition = `${document.getElementById("weight").value}`+"test";

    let test = new form(document.getElementById("date").value,
                        document.getElementById("chef").value,
                        document.getElementById("consumer").value,
                        document.getElementById("weight").value,
                        composition,
                        document.getElementById("numAccount").value);
    datos.push(test);    
    show(datos);
}

function show(datos){
    let contenedor = document.getElementById("show");
    contenedor.innerHTML = ""; // limpiar antes de volver a mostrar
    datos.forEach((item, index) => {
    contenedor.innerHTML += `
        <div>
        <strong>Registro ${index + 1}</strong><br>
        Fecha: ${item.date}<br>
        Chef: ${item.cook}<br>
        Consumidor: ${item.consumer}<br>
        Peso: ${item.weight}g<br>
        Composición: ${item.composition}<br>
        Nº Cuenta: ${item.numAccount}<br><hr>
        </div>
    `;
    });
}