const h1 = document.querySelector('h1');
const calculo1 = document.getElementById('calculo1');
const calculo2 = document.getElementById('calculo2');
const boton = document.querySelector('.boton');
const resultado = document.getElementById('resultado');
const form = document.querySelector('#form');


// boton.addEventListener('click', bntOnClick); 

// function bntOnClick(){
//   const suma = Number(calculo1.value) + Number(calculo2.value);
//   resultado.innerHTML = "Resultado es: "+suma;
  
// }

//para formulario

form.addEventListener('submit',sumarr )

function sumarr(event){
  event.preventDefault();
  const suma = Number(calculo1.value) + Number(calculo2.value);
  resultado.innerHTML = "Resultado es: "+suma;
  
}