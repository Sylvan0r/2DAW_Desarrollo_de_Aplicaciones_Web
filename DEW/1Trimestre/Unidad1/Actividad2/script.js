const button = document.getElementById('but')
if(button){
  button.addEventListener('click', updateLabel);
}

function updateLabel() {
  let Num1 = document.getElementById('num1').value;
  let Num2 = document.getElementById('num2').value;
  let addend1 = Number(Num1);
  let addend2 = Number(Num2);
  let sum = addend1 + addend2;
  console.log("La suma de ambos numeros es: "+sum);
  console.log(sum*5);
}