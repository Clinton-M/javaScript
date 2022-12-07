const user = {
    name: 'John',
    age: 30,
    city: 'New York'
}

//const {name, ...values} = user;


const {name,...values} = user;
console.log(name);
console.log(values);

