var N1;

function cuenta(){
    N1 = parseInt(prompt("Introduce un numero"));
    document.writeln("La cuenta adelante de "+N1+" sería:<br>");
    for($i=1;$i<N1;$i++){
        document.write($i);
    };

    document.writeln("<br><br>La cuenta atras de "+N1+" sería:<br>");
    for($i=N1-1;$i>0;$i--){
        document.write($i);        
    }
}