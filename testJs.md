## Respueta al al test javaScript 

Estas respuestas NO SON ABOSOLUTAS. Es completamente valido si tienes otras respuestas.

## Variables y Condicionales

### 1️⃣ Responde la siguientes preguntas en la seccion de comentarios:

- ¿Que es una variable y para que sirve?

cajitas (espacios en memoria) donde podemos guadar informacion (dependiendo de los tipos y estructuras de datos que soporta nuestro lenguaje.)

- ¿Cual es la diferencia entre declarar e inicializar una variable?

declarar es cuando  creamos una varibale
miestras que inicializar es darle valor a la variable

- ¿Cual es la diferencia entre sumar numeros y concatenar string?

al sumar string solo se concatenan las letras (es decir dos strings se unen a  uno) mientras con los numeros optenemos un nuevo valor

- ¿Cual operador me permite sumar o concatenar?
 usando el sigo + en ambos casos


### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente infomacion:

- Nombre: -> string
- Apellido: -> string
- Nombre de usuario en ClassCTz: -> string(@clinton)
- Edad: -> Number
- Correo electronico: ->string (clinton@gmail.com)
- Mayor de edad: -> boolean
- Dinero ahorrado: -> Number
- Deudas: -> Number

### 3️⃣ Traduce a codigo JavaScript las variables del ejemplo anterior y deja tu codigo en los comentarios

'''
let nombre = "Clinton";
let apellido = "Mejia";
let userName = "cln";
let edad = 19;
let mail = "clinton@gmail,com";
let isMayorDeEdad = true;
let ahorro = 800;
let deudas = 00;
'''

### 4️⃣ Calcula e imprima las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

'''
let nombreCompleto = nombre +' ' + apellido
console.log('nombreCompleto: '+nombreCompleto)

let dineroReal = ahorro - deudas;
console.log('dineroReal: ' +dineroReal)
'''


## Funciones

### 1️⃣ Responde las siguientes preguntas en la seccion de comentario:

- ¿Que es una funcion?

son la forma de encapsular(*guardar en una caja*) bloques de codigo para su reutilizacion

'''
function nombreCompleto(name, lastName){
    return name+' '+lastName;
}

nombreCompleto(nombre,apellido)
'''

- ¿Cuando me sirve una funcion en mi codigo?

Nos sirve cuando tenemos codigos y/o variables muy parecidos ( con cambios que podrian ser argumentos y parametros) que podemos encapsular para su reutilizacion. 

*para reducir codigo *codigo legible *reciclar codigo

- ¿Cual es la diferencia entre parametros y argumentos de una funcion?

Una funcion pide parametros y al llamar a la funcion le damos argumentos.

'''
function ejemplo(parametros){

}

ejemplo(arguementos)

'''


### 2️⃣ Convierte  el siguiente codigo en una funcion, pero, cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion:

'''
const name = "clinton";
const lastName = "mejia"
const completeName = name + lastName;
const nickname = "clix";

console.log("Mi nombre es " +completeName + ", pero prefiero que me digas " + nickname + ".")
'''

- Respuesta:
'''

function nombreCompleto(name, lastName){
    return name+' '+lastName;
}

function saludo(name, lastName, nickname){
  const completeName = nombreCompleto(name,lastName);
	  
console.log("Mi nombre es " +completeName + ", pero prefiero que me digas " + nickname + ".")
  
}

saludo("clinton","mejia","clix")
'''


## Condionales

### 1️⃣ Responde las siguientes preguntas en la seccion de comentarios:

- ¿Que es un condicional?

ejecucion de codigo dependido de la validacion

- ¿Que tipos de condionales existe en javaScript y cuales son sus 
diferencias?

if(){}else if{}elese, swicht

if permite validaciones personalisadas ilimitadas mientras que en switch tiene limitadas 


- ¿Puedo conbinar funciones y condicionales?

si. las funciones puiede encapsular cualquier bloquede  de codigo


### 2️⃣ Replica el comportamiento de siguiente codigo que usa la sentencia switch utilizando if, else y else if:


'''
const tipodeSuscripcion = "Basic";

switch(tipodeSuscripcion){
    case "Free":
        console.log("Solo puede tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puede tomar casi todo los cursos durante un mes");
        break;
    case "Expert":
        console.log("Puede tomar casi todo los cursos durante un año");
        break;
    case "ExpertDuo":
        console.log("Tu y alguien mas puede tomar casi todo los cursos durante un año");
        break;
}
'''
- Respuesta:

'''
if(tipodeSuscripcion == "Free"){
  	console.log("Solo puede tomar los cursos gratis");
}else if(tipodeSuscripcion =="Basic"){
    console.log("Puede tomar casi todo los cursos durante un mes");
}else if(tipodeSuscripcion=="Expert"){
  	console.log("Puede tomar casi todo los cursos durante un año");
}else{
    console.log("Tu y alguien mas puede tomar casi todo los cursos durante un año");
}
'''

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni els eif)

'''
function conseguirSuscripcion(suscripcion){
  if(suscripcion == "Free"){
  	console.log("Solo puede tomar los cursos gratis");
      retrun;
  }

  if(suscripcion =="Basic"){
    console.log("Puede tomar casi todo los cursos durante un   mes");
      retrun;
  }

  if(suscripcion=="Expert"){
  	console.log("Puede tomar casi todo los cursos durante un   año");
      retrun;
  }
  
  if(suscripcion=="ExpertDuo"){
    console.log("Tu y alguien mas puede tomar casi todo los     cursos durante un año");
      retrun;
  }
  
  console.warn('Ese tipo se suscripcion no existe')
}
conseguirSuscripcion("ExpertDuo")
'''

> 💡Bonus: si ya eres experto o experta en el leguaje, te desafio a comentar como replicar este comportamiento con arrays u objetos y un solo condicional. 

'''
const tiposDeSuscripciones ={
  free: 'Solo puede tomar los cursos gratis',
  basic: 'Puede tomar casi todo los cursos durante un   mes',
  expert: 'Puede tomar casi todo los cursos durante un   año',
  expertDuo: 'Tu y alguien mas puede tomar casi todo los     cursos durante un año'
}


function conseguirTipoDeSuscripcion(suscripciones){
  if(tiposDeSuscripciones[suscripciones]){
    console.log(tiposDeSuscripciones[suscripciones])
    return;
  }
  console.warn("este tipo de suscripcion no existe")
  
}

conseguirTipoDeSuscripcion("basic")
'''


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la seccion de comentarios:

- ¿Que es un ciclo?

Ejecucion de codigos hasta que se cumpla cierta condicion.

- ¿Que tipo de ciclos existe e javaScript?

While, For, Do While

- ¿Que es un ciclo infinito y por que es un problema?

Cuando la validacion de la condicion nunca se cumple y el problmea que da es no se detendra hasta que el buscador se sature o pare.

- ¿Puedo mezclar ciclos y condicionales?

Si.

### 2️⃣ Replica el comportamiento del los siguientes ciclos for utilizando ciclos while:

'''
for (let i = 0; i<5; i++){
    console.log("El valor de i es: " + i)
}

- Respuesta 

let j = 0;
while(j<5){
  console.log("El valor de i es: " + j)
  j++;
}



for (let i = 0; i>=2; i--){
    console.log("El valor de i es: "+i)
}

- Respuesta

let k = 5;

while(k>=2){
  console.log("El valor de i es: " + k)
  k--;
}


'''


### 3️⃣ Escribe un codigo javaScript que le pregunte a los usuarios cuanto es `2 + 2`. Si responde bien, mostramos un mensaje de felicidades, pero si responde mal, volvemos a empezar

> 💡 Pistas: puedes usar la funcion promt de javaScript


## Listas

### 1️⃣ Responde las siguientes preguntas enla seccion de comentarios

- ¿Que es un array?

'''
const array=[1,"hola!,true];
'''

Es una lista de elementos.

- ¿Que es un objeto?


Es una lista de elementos pero casa elemento tiene un nombre clave.

'''
const obg ={
    nombre:"valor",
    edad: 19,
};
'''
- ¿Cuando es mejor usar objetos o arrays?

Arrays para similitud
Objeto cuando los nombre de cada elemento son importantes

- ¿Puedo mezclar arrays con objetos o incluso con arrys?

Si. los arrays pueden guarar objetos y estos mismos puedes guardar arrays.


### 2️⃣ Crea una funcion que pueda recibir cualquier array como parametro e imprima su primer elemento:

'''

function imprimirArray(arr){
  console.log(arr[1])
}

imprimirArray(["clinton","mejia"])
'''

### 3️⃣ Crea un funcion que pueda recibir cualquier array como parametro e imprimir todos sus elementos uno por uno(no se vale imprimir el array completo).

'''
let arr = ["cliton","juan","max","jhon"]

function imprimirElemento(arr){
  for(var i=0; i<arr.length; i++){
    console.log(arr[i])
  }
}

imprimirElemento(arr)
'''


### 4️⃣ Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto)

'''
const obj = {
  name: "clinton",
  lastNmae: "mejia",
  city: "Ayacucho"
}

function imprimirObj(obj){
  const arr =  Object.values(obj)
  //keys and values -> Object
   for(let i=0; i<arr.length;i++){
     console.log(arr[i])
   }
}

imprimirObj(obj)
'''