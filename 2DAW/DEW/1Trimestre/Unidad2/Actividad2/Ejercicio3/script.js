const but = document.getElementById("but");
if(but){
    but.addEventListener("click",bt);
}

function bt(){
    var x = Date.parse(document.getElementById("dateNac").value);
    

    console.log(Date.parse("2005"));

    switch(true){
        case x<=Date.parse("2004"):
            document.getElementById("result").innerHTML = "Usted seria introducido en la categoría de Senior";
            break;
        case x>Date.parse("2004") && x<Date.parse("2005"):
            document.getElementById("result").innerHTML = "Usted seria introducido en la categoría de Junior";
            break;            
        case x>Date.parse("2006") && x<Date.parse("2007"):
            document.getElementById("result").innerHTML = "Usted seria introducido en la categoría de Juvenil";
            break;
        case x>Date.parse("2008") && x<Date.parse("2009"):
            document.getElementById("result").innerHTML = "Usted seria introducido en la categoría de Infantil";
            break;
        case x>Date.parse("2010") && x<Date.parse("2011"):
            document.getElementById("result").innerHTML = "Usted seria introducido en la categoría de Alevin";
            break;            
        case x>Date.parse("2012") && x<Date.parse("2013"):
            document.getElementById("result").innerHTML = "Usted seria introducido en la categoría de Benjamin";
            break;
        case x>Date.parse("2014") && x<Date.parse("2005"):
            document.getElementById("result").innerHTML = "Usted seria introducido en la categoría de PreBenjamiin";
            break;            
        case x>Date.parse("2016"):
            document.getElementById("result").innerHTML = "Usted seria introducido en la categoría de Micros";
            break;
        default:
            console.log("error");
            break;
    }
}