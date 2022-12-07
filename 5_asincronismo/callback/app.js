function suma(a,b){
    return a + b;
}

function calculadora(a,b, callback){  // callback
    return callback(a,b);
}

console.log(calculadora(2,2,suma));



//----------------

setTimeout(function (){
    console.log('Hola javascript');  // setTimeout es una funcion que se ejecuta despues de un tiempo
},2000)



// -------------------
function greetin(name){
    console.log(`hola ${name}`);
}

setTimeout(greetin,2000,'Clinton')