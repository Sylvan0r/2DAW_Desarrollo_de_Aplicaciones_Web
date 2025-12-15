document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (validator() == true) {
        crear();
    }
});

class form {
    constructor(date, cook, consumer, weight, numAccount) {
        this.date = date;
        this.cook = cook;
        this.consumer = consumer;
        this.composition;
        this.weight = weight;
        this.numAccount = numAccount;
    }
}

function validator() {
    let date = document.getElementById("date").value;
    let chef = document.getElementById("chef").value;
    let consumer = document.getElementById("consumer").value;
    let weight = document.getElementById("weight").value;
    let numAccount = document.getElementById("numAccount").value;

    let chefPattern = /^[A-Z]{2}\W\d{4}$/;
    let consumerPattern = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;

    if (date != "") {
        if (chef != "" && chefPattern.test(chef)) {
            if (consumer != "" && consumerPattern.test(consumer)) {
                if (weight != "" && weight >= 100 && weight <= 5000) {
                    if (numAccount != "" && validateUSAccount(numAccount)) {
                        document.getElementById("error").innerHTML = "";
                        return true;
                    } else {
                        document.getElementById("error").innerHTML = "Error de número de cuenta (formato o control incorrecto)";
                        return false;
                    }
                } else {
                    document.getElementById("error").innerHTML = "Error de peso";
                    return false;
                }
            } else {
                document.getElementById("error").innerHTML = "Error de consumidor o su formato";
                return false;
            }
        } else {
            document.getElementById("error").innerHTML = "Error de chef o su formato";
            return false;
        }
    } else {
        document.getElementById("error").innerHTML = "Error de fecha";
        return false;
    }
}

function validateUSAccount(account) {
    // Formato general: LLDD-CCCCCCCCCCCC-DDDD
    const basePattern = /^([A-Z]{2})(\d{2})-(\d{12})-(\d{4})$/;
    const match = account.match(basePattern);
    if (!match) return false;

    const letters = match[1];
    const sumDigitsStr = match[2];
    const accountDigits = match[3];
    const control = match[4];

    // 1️⃣ Calcular la suma esperada de las dos letras (A=1, B=2, …, Z=26)
    const val1 = letters.charCodeAt(0) - 64;
    const val2 = letters.charCodeAt(1) - 64;
    const sumLetters = val1 + val2;
    const expectedSum = sumLetters.toString().padStart(2, "0");

    // Comparar como cadenas (para conservar ceros a la izquierda)
    if (sumDigitsStr !== expectedSum) return false;

    // 2️⃣ Calcular los dígitos de control
    const firstSix = accountDigits.substring(0, 6).split("").map(Number);
    const lastSix = accountDigits.substring(6, 12).split("").map(Number);

    const avg1 = Math.floor(firstSix.reduce((a, b) => a + b, 0) / 6);
    const avg2 = Math.floor(lastSix.reduce((a, b) => a + b, 0) / 6);

    const expectedControl = `${avg1.toString().padStart(2, "0")}${avg2
        .toString()
        .padStart(2, "0")}`;

    if (control !== expectedControl) return false;

    // 3️⃣ Si todo correcto, mostrar sin guiones
    document.getElementById("numAccountFormatted").value =
        letters + sumDigitsStr + accountDigits + control;

    return true;
}

let datos = [];

function crear() {
    let compositionPattern = /^\d+g[A-Z]{1,2}\d*[A-Z]{1,2}\d*$/;
    let composition = `${document.getElementById("weight").value}` + "test";

    let test = new form(
        document.getElementById("date").value,
        document.getElementById("chef").value,
        document.getElementById("consumer").value,
        document.getElementById("weight").value,
        document.getElementById("numAccountFormatted").value
    );

    datos.push(test);
    show(datos);
}

function show(datos) {
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