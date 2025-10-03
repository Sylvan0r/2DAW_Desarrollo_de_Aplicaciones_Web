const but = document.getElementById("bt");
if(but){
    but.addEventListener("click",bt);    
}

function bt(){
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    parseInt(Num1);
    parseInt(Num2);     
    if(Num1>Num2){
        document.writeln("El numero 1 es mayor que el numero 2");
    }if(Num1<Num2){
        document.writeln("El numero 1 es menor que el numero 2");
    }if(Num1==Num2){
        document.writeln("El numero 1 es igual que el numero 2");
    }
}