if (true){
    // Código a ejecutar si la condición es verdadera
    console.log("Hola mundo");
}else if (false){
    // Código a ejecutar si la condición es falsa
    console.log("Hola mundo");
}else{
    // Código a ejecutar si la condición es falsa  -> default
    console.log("Adiós mundo cruel");
}

var edad = 18;

if (edad === 18){
    console.log("Puedes votar, será tu primera votación");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aún no puedes votar");
}

// Operador ternario
condition ? true : false;


var edad = 18;
edad ? console.log("Puedes votar, será tu primera votación") : console.log("Aún no puedes votar");


var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy un uno";
console.log(resultado);

var vocal = "z";
var resultado = vocal == "a"? "es un vocal ": "no es un vocal";
console.log(resultado);