console.log(eliminarPrimeroYUltimo([1,2,3,4]));
console.log(eliminarPrimeroYUltimo([9.,8,7,6,5]));
console.log(eliminarPrimeroYUltimo([10,20]));

function eliminarPrimeroYUltimo(array){
    array.shift();
    array.pop();
    return array;
}