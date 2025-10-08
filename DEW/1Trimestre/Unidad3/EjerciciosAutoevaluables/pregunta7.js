console.log(rankingPlayas(['Las Teresitas', 'Las Canteras', 'Maspalomas'], [8, 9, 7]));
console.log(rankingPlayas(['El medano', 'La tejita'], [6,7]));
console.log(rankingPlayas(['Benijo', 'Papagayo'], [10,9]));


function rankingPlayas(array1,array2){
    const ranking = array1.map((nombre, index) => ({
        nombre: nombre,
        puntuacion: array2[index]
    }));

    ranking.sort((a, b) => b.puntuacion - a.puntuacion);

    const resultado = [];

    for (let i = 0; i < ranking.length; i++) {
        resultado.push(ranking[i].nombre);
    }

    return resultado;
}