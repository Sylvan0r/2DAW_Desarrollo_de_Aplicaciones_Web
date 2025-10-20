dividirNombre("Carlos Perez Gómez");

function dividirNombre(nombreCompleto) {
    const partes = nombreCompleto.split(' ');
    let linea1 = console.log("Nombre: " + partes[0]);
    let linea2 = console.log("Apellido 1: " + partes[1]);
    let linea3 = console.log("Apellido 2: " + partes[2]);

    return linea1, linea2, linea3;
}