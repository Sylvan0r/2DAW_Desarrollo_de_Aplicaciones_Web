console.log(rutasTuristicas(["Teide","Maspalomas"], ["Anaga", "Teide"], 3));
console.log(rutasTuristicas(["Garajonay","Timanfaya"], ["Timanfaya", "Cueva de los verdes"], 2));
console.log(rutasTuristicas(["La Graciosa","El Hierro"], ["La Gomera"], 1));

function rutasTuristicas(array1, array2, n) {
    const conjunto = new Set([...array1, ...array2]);
    const resultado = Array.from(conjunto);
    resultado.sort();
    return resultado.slice(0, n);
}