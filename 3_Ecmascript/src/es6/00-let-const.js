var lastName = 'David'
lastName = 'Oscar'
console.log(lastName)


let fruit = 'Apple'
fruit = 'Orange'
console.log(fruit)


const name = 'David'
name = 'Oscar'
console.log(name)


const fruits = () =>{
    if(true){ 
        var fruit1 = 'Apple' // function scope
        let fruit2 = 'Orange' // block scope
        const fruit3 = 'Banana' // block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits()
