const items = [1,3,2,3,3,1,10]

const rta =  items.reduce((obj, item) =>{
    if(obj[item]){
        obj[item]++   // si ya existe el item, incrementa el valor
    }else{
        obj[item] = 1 // si no existe el item, lo crea con valor 1
    }

    return obj;
},{})

console.log(rta);


// ejemplo

const data = [
    {
        name: 'Juan',
        level: 'low'
    },
    {
        name: 'Pedro',
        level: 'medium'
    },
    {
        name: 'Pablo',  
    },
    {
        name: 'Juan',  
        level: 'low'
    },
    {
        name: 'Pedro',
        level: 'medium'
    },
    {
        name: 'Pablo',
        level: 'high'
    },
]

const rta1 = data.map(item  => item.level).reduce((obj, item)=>{
    if(obj[item]){
        obj[item]++;
    }else{
        obj[item] = 1;
    }

    return obj;

},{})

console.log(rta1);