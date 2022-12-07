// --------------var

var firstName; // valor undefined
firstName = 'Clinton';
console.log(firstName);


// reasignamos el valor
var lasName = 'Clix';
lasName = 'Blout';
console.log(lasName);


// redeclarando
var secondName = 'Anha';
var secondName = 'Flora';
console.log(secondName);


// ----------------let

// reasignamos el valor

// se puede reasignar el valor pero no se puede redeclarar

let fruit = 'Apple';
fruit = 'Kiwi';

// let fruit = 'Banana'; // ERROR


// ----------------const

// no se puede reasignar el valor ni redeclarar

const lastName = 'Clix';
// lastName = 'Blout'; // ERROR
// const lastName = 'Blout'; // ERROR



// -----------------var vs let vs const

// var es global y se puede reasignar y redeclarar


const vehiculos = [];

vehiculos.push('carro');
console.log(vehiculos)

vehiculos.pop('carro');
console.log(vehiculos)