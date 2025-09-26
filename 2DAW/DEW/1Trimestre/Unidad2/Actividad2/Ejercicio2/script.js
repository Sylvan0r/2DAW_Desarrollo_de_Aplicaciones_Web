const but = document.getElementById("bt");
if(but){
    but.addEventListener("click",bt);
}

function bt(){
    let value1 = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    
    console.log(value1);
    console.log(gender);
}

function genderVal(value){
    switch(true){
        case selected="masc":
            console.log("ninio");
            break;
        case selected="fem":
            console.log("ninia");
            break;
        case selected="other":
            console.log("que");
            break;
        default:
            console.log("ERROR");
            break;        
    }
}