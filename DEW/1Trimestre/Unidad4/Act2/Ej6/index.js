console.log(verificarDNI("12345678Z")); // true
console.log(verificarDNI("12345678T")); // false

function verificarDNI(dni) {
    const letras = "12345678Z";
    const letraFinal = dni.charAt(dni.length - 1);
    if(letraFinal == "Z"){
        return "CORRECTA";
    }else{
        return "INCORRECTA";
    }
}