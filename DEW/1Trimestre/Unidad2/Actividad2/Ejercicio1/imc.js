const but = document.getElementById("bt");
let result = document.getElementById("resultado");

if(but){
    but.addEventListener("click",bt);
}

function bt(){
    let value1 = document.getElementById("cm").value;
    let value2 = document.getElementById("kg").value;
    
    if(CmValidation(value1)==true && KgValidation(value2)==true){
        value1= value1 * value1;
        let resultValue = value2 / value1;
        calification(resultValue);
    }    
}

function KgValidation(value2){
    if(value2>0){        
        return true;
    }else{
        result.innerHTML = "Valor de Kg invalido";        
        return false;        
    }
}

function CmValidation(value1){
    if(value1>0){
        return true;
    }else{
        result.innerHTML = "Valor de Cm invalido";        
        return false;                
    }
}

function calification(value){
    console.log(value);
    switch(true){
        case value<=16:
            result.innerHTML = "Usted tiene un valor aproximado de "+value+" , lo cual es considerado delgadez severa";
            break;
        case value>=16 && value<=16.99:
            result.innerHTML = "Usted tiene un valor aproximado de "+value+" , lo cual es considerado delgadez moderada";
            break;            
        case value>=17 && value<=18.49:
            result.innerHTML = "Usted tiene un valor aproximado de "+value+" , lo cual es considerado delgadez aceptable";
            break;            
        case value>=18.50 && value<=24.99:
            result.innerHTML = "Usted tiene un valor aproximado de "+value+" , lo cual es considerado peso normal";
            break;                        
        case value>=25 && value<=29.99:
            result.innerHTML = "Usted tiene un valor aproximado de "+value+" , lo cual es considerado sobrepeso";
            break;            
        case value>=30 && value<=34.99:
            result.innerHTML = "Usted tiene un valor aproximado de "+value+" , lo cual es considerado obesidad (Tipo 1)";
            break;                                    
        case value>=35 && value<=40:
            result.innerHTML = "Usted tiene un valor aproximado de "+value+" , lo cual es considerado obesidad (Tipo 2)";
            break;            
        case value<40:
            result.innerHTML = "Usted tiene un valor aproximado de "+value+" , lo cual es considerado obesidad (Tipo 3)";
            break;                                    
        default:
            result.innerHTML = "Error";
            break;
    }
}