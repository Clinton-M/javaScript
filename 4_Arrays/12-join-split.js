const elements = ['Fire', 'Air', 'Water'];


let rta = elements.join('--');

console.log(rta);   // Fire--Air--Water

// ejemplo 2 

let nombre = 'Clinton Mejia';

let nombreArray = nombre.split(' ').join('-').toLowerCase();

console.log(nombreArray);   // [ 'Clinton', 'Mejia' ]