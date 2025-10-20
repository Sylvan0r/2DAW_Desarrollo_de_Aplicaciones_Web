console.log(tamano("Rogelio Bermúdez"));

function tamano(nombreCompleto){
    nombreCompleto = nombreCompleto.replace(" ", "");
    return nombreCompleto.length;
}