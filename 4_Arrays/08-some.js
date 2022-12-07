

const numbers = [1, 2, 3, 4];

const rta = numbers.some(item => item % 2 === 0);

console.log(rta);


// ejemplo

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

const rta2 = orders.some(item => item.delivered === true);
console.log(rta2);


// ejemplo2 

// err corregir

const dates =[
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1,1,  11),
        tittle: 'Curso de JS',
    },
    {
        startDate: new Date(2021, 1, 1,15),
        endDate: new Date(2021, 1,1, 15, 30),
        tittle: 'Curso de React',
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1,1, 15,21),
        tittle: 'Curso de Node',
    }
    
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1,1,  20, 30),
};


const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) =>{
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log(isOverlap(newAppointment));