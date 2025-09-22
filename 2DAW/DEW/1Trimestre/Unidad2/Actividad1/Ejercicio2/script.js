let variable1;
let variable2;
let variable3;

function variables(){
    document.writeln("Tipo variable 1: "+typeof(variable1)+"<br>");
    document.writeln("Tipo variable 2: "+typeof(variable2)+"<br>");
    document.writeln("Tipo variable 3: "+typeof(variable3)+"<br>");

    variable1 = "Hola mundo";
    variable2 = 2;
    variable3 = false;

    document.writeln("<br> Post cambio de tipo de variables:");
    document.writeln("<br>Tipo variable 1: "+typeof(variable1)+"<br>");
    document.writeln("Tipo variable 2: "+typeof(variable2)+"<br>");
    document.writeln("Tipo variable 3: "+typeof(variable3)+"<br>");
}