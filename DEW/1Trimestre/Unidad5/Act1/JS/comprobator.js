document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    comprobator();
});

function comprobator(){
    var numFalt = [];
    for (let i = 1; i <= 10; i++) {
        const seleccion = document.querySelector(`input[name="pregunta${i}"]:checked`);    
        if (!seleccion) {
            numFalt.push(i);
            console.log(numFalt)
            document.getElementById("notAnswered").innerHTML = `⚠️ No has seleccionado nada en la pregunta ${numFalt}`;
        } else {
            numFalt.push();
            if(document.querySelector(`input[id="correct${i}"]:checked`)){
                document.getElementById(`answer${i}`).innerHTML = "✓";
                document.getElementById(`answer${i}`).style = "color:green";
            }else{
                document.getElementById(`answer${i}`).innerHTML = "X";
                document.getElementById(`answer${i}`).style = "color:red";
            }            
        }
    }
}