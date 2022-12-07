const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]
console.log('origianl',orders);

const rta = orders.map(item => item.total);
console.log('rta',rta);

//---

// error
// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });

// console.log('rta2',rta2);



// correcto
const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19,
    };
});

console.log('rta3',rta3);

// mas corto 
const newArr = orders.map(order => ({...order, tax: .19}));

console.log('newArr',newArr);