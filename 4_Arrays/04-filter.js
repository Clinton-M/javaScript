const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const newArray = [];

for(let index = 0; index < words.length; index++){
    const item = words[index];
    if( item.length >= 6){
        newArray.push(item);
    }
}

console.log(newArray);

// -filter

const rta = words.filter(item => item.length >=6)
console.log(rta)


// ejemplo

const valores = [true,false,true]

const r = valores.filter(item => item === true)
console.log(r.length)

// ejemplo 2 

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


// const respta = orders.filter(item => item.delivered === true)
const respta = orders.filter(item => item.delivered && item.total >= 100)
console.log(respta)


// --- aprender  mas
const buscar = (query) =>{
    return orders.filter(item =>{
        return item.customerName.includes(query)
    })
}

console.log(buscar('a'))

// pro

const search = (query) =>{
    return orders.filter(item=>{
        return item.customerName.includes(query)
    })
}

//

const search1 = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}