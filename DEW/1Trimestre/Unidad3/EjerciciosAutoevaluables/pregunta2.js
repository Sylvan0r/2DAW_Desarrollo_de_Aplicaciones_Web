console.log(clasificarVideojuegos(["Fortnite", "FIFA", "The Witcher"], ["Battle Royale", "Deportes", "RPG"]));
console.log(clasificarVideojuegos(["League of Legends", "Call of Duty"], ["MOBA", "FPS"]));
console.log(clasificarVideojuegos(["Minecraft", "Terraria"], ["Sandbox", "Sandbox"]));

function clasificarVideojuegos(array1, array2) {
    let calificacion = new Object();

    for(let i = 0; i < array2.length; i++) {
        if(array2[i] in calificacion) {
            calificacion[array2[i]] = [Object.keys(array1).map(function(k) { return calificacion[k]; }).join(array1[i-1]), array1[i]];
        }else{
            calificacion[array2[i]] = [array1[i]];
        }
    }

    return calificacion;
}