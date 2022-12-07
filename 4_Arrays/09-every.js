const numbers = [1,30,49,29,10,13];

// si son menores a 40

const rta = numbers.every((item) => item <= 40);

console.log(rta);

// ejemplo 

const data = [
    {
        name: 'Juan',
        age: 12,
    },
    {
        name: 'Pedro',
        age: 10,
    },
    {
        name: 'Pablo',
        age: 15,
    },
    {
        name: 'Juan',
        age: 9,
    },

]

// todos deben ser mayores a 10


const rta3 = data.every((item) => item.age >=10);

console.log(rta3);