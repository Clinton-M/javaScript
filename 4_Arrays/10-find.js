const numbers = [1,30,49,29,10,13];

let rta = numbers.find(item => item ===30);

console.log(rta);   // o undefined


const products = [
    {
        name: 'laptop',
        price: 200,
        id: 'L'
    },
    {
        name: 'mouse',
        price: 20,
        id: 'M'
    },
    {
        name: 'monitor',
        price: 100,
        id: 'MO'
    },
    {
        name: 'keyboard',
        price: 50,
        id: 'K'
    },
]

const rta2 = products.find(item => item.id === 'MO');

console.log(rta2);


// para encontrar el indice

const rta3 = products.findIndex(item => item.id === 'MO');

console.log(rta3);   // o -1