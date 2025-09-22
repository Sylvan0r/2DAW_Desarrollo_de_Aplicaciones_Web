let Num1 = document.getElementById("num1").value;
let Num2 = document.getElementById("num2").value;
parseInt(Num1);
parseInt(Num2);

const but = document.getElementById("bt");
but.addEventListener("click",bt);

function bt(){
    if(Num1<Num2){
        document.writeln("El numero 1 es mayor que el numero 2");
    }else{
        document.writeln("Error");
    }
}