// map es imutale, no modifica el array original 
// map crea un nuevo array con los resultados cambiantes

const array = [1, 2, 3, ];

// const newArray = [];

// for(let index = 0; index < array.length; index++){
//     const element = array[index];
//     newArray.push(element+ '++');
    
// }


// console.log(array);
// console.log(newArray);



// const newArray = array.map(item => item + '++');

const newArray = array.map(item => item + '++');

console.log(array);
console.log(newArray);