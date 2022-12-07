function* iterate(array){
    for (let i of array){
        yield i;
    }
}

const it = iterate(['clinton', 'trump', 'sanders']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);



function* iterate(array){
    for(let i of array){
        
    }
}


// sacar cantidad de true de un array ------------practica raro

const valores = [true, true,false,true,false,true];

function* iterate(array){
    let count = 0;
    for(let i of array){
        if(i){
            count++;
        }
    }
    yield count;
}

const itx = iterate(valores);

console.log(itx.next().value);



// when peter pin shan chen died?
// 1. 1st of january 2017
// 2. 1st of january 2018
// 3. 1st of january 2019
// 4. 1st of january 2020









