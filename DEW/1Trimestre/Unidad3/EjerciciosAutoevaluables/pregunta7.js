console.log(rankingPlayas(['Las Teresitas', 'Las Canteras', 'Maspalomas'], [8, 9, 7]));
console.log(rankingPlayas(['El medano', 'La tejita'], [6,7]));
console.log(rankingPlayas(['Benijo', 'Papagayo'], [10,9]));


function rankingPlayas(array1,array2){
    const ranking = [];

    for(let i=0; i<array1.length; i++){
        ranking.push(array2[i]);
    }

    ranking.sort();

    return ranking;
}