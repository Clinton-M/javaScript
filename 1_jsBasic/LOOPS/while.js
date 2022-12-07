var frutas = ["manzana", "pera", "uva", "sandia", "mango"];

function imprimirFrutas(frutas){
    console.log(`fruta: ${frutas}`);

}

// var i =0;
// while(i<frutas.length){
//     imprimirFrutas(frutas[i])
//     i++;
// }

//quitar el primer elemento del array
while(frutas.length>0){
    var fruta = frutas.shift(); //sacar elemento del array con shift
    imprimirFrutas(fruta);
}