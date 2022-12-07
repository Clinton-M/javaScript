const letters = ['a', 'b', 'c'];

console.log("for");

for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    
    console.log(element);
}


//----
console.log("forEach");

letters.forEach((item)=>console.log(item));