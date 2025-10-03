var N1;
let $i = 1;

function cuenta(){
    N1 = parseInt(prompt("Introduce un numero"));
    document.writeln("La cuenta adelante de "+N1+" sería:<br>");
    while($i<N1){
        document.write($i);
        $i++;
    }
    
    document.writeln("<br><br>La cuenta atras de "+N1+" sería:<br>");
    N1--;
    while(N1>0){
        document.write(N1);
        N1--;
    }
}
