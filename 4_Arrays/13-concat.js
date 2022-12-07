const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const anotherElements = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];


const rta = elements.concat(anotherElements);

console.log(rta);


const rta2 = [...elements, ...anotherElements];  // solo arrays

console.log(rta2);