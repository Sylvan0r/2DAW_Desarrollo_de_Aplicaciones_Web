console.log(topJuegos(['Zelda', 'Mario', 'Metroid',"Doom"], [95,90,88,92]));
console.log(topJuegos(['Overwatch', 'Apex Legends', 'Valorant'], [85,90,88]));
console.log(topJuegos(['Stardew Valley', 'Hades', 'Celeste',"Undertale"], [94,92,95,93]));

function topJuegos(array1,array2){
    const juegos = array1.map((nombre, index) => ({
        nombre: nombre,
        puntuacion: array2[index]
    }));
    juegos.sort((a, b) => b.puntuacion - a.puntuacion);
    const resultado = [];
    for (let i = 0; i < juegos.length; i++) {
        resultado.push(juegos[i].nombre);
    }

    return resultado.slice(0,3);
}