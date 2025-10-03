const but = document.getElementById("bt");
if(but){
    but.addEventListener("click",bt);    
}

function bt(){
    let contenido = document.getElementById("inp").value;
    if(contenido == ""){
        document.writeln("Hola");
    }else{
        document.writeln(contenido);
    }
}