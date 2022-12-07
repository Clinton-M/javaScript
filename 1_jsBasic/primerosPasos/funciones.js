// que es una funcion? 
// es un conjunto de instrucciones que se ejecutan cuando se llama a la funcion

// ejemplo de funcion

// funcoiones declarativas

function miFuncionn() {
    return 3;
}

miFuncionn();

// funciones de expresion  

var miFuncion = function(a, b) {
    return a + b;
}

miFuncion();

// ejemplo de funcion que recibe parametros

function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}

saludarEstudiantes("Jorge");

//

function saludarEstudiantes(estudiante) {
    console.log(`hola ${estudiante}`);
}


saludarEstudiantes("clinton");


// ejemplo de funcion que retorna un valor
function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}

sumar(1, 2);



