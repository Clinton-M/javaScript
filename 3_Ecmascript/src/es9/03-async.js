async function* anotherGenerator(){
    yield await Promise.resolve(i);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hola');



async function arraOfNames(array){
    
    for(let value of array){
        console.log(value);
    }
    
}

const name = arraOfNames(['Luis', 'Juan', 'Pedro']);
console.log('after');