const but = document.getElementById("bt");
if(but){
    but.addEventListener("click",bt);
}

function bt(){
    let value1 = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    let result = document.getElementById("resultado");
    let calcH = 220-value1;
    let calcM = 226-value1;

    switch(gender){
        case "masc":
            result.innerHTML = "Para un hombre de "+value1+" años la FCM seria de "+calcH;
            extra(calcH);
            break;
        case "fem":
            result.innerHTML = "Para una mujer de "+value1+" años la FCM seria de "+calcM;            
            extra(calcM);    
            break;                      
        default:
            console.log("que");
            break;
    }
}

function extra(value){
    let zonaRec = document.getElementById("zonaRec");
    let zonaAer = document.getElementById("zonaAer");
    let zonaAnaer = document.getElementById("zonaAnaer");
    let lineaRoja = document.getElementById("lineaRoja");
    
    zonaRec.innerHTML = "Zona de recuperación: "+value*0.6 +" - "+value*0.7;
    zonaAer.innerHTML = "Zona de recuperación: "+value*0.7 +" - "+value*0.8;
    zonaAnaer.innerHTML = "Zona de recuperación: "+value*0.8 +" - "+value*0.9;
    lineaRoja.innerHTML = "Zona de recuperación: "+value*0.9 +" - "+value*1;
}