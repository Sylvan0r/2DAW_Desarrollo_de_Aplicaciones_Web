function myFunction(){
    let comesales = prompt("¿Cuantas comesales sois?");
    let numComesales = Number(comesales);
    calculo(numComesales);
}

function calculo(numComesales){
    let huevos = Number(numComesales*2);
    let patatas = Number(numComesales);
    let aceite = Number(numComesales*200)
    document.writeln("Para tu caso se necesitaran los siguientes ingredientes:<br>");
    document.writeln("<br>Huevos: " + huevos);
    document.writeln("<br>Patatas: " + patatas);
    document.writeln("<br>Aceite (Ml): " + aceite);    
}