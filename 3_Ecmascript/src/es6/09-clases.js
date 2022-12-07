
// declarando una clase
class User {

};

// instanciando una clase
const newUser = new User();


//***************************************** */

class user{
    // metodos
    greeting(){
        return 'Hello World';
    };
};

const clix = new user();
console.log(clix.greeting());


const debeloper = new user();
console.log(debeloper.greeting());

//***************************************** */
// constructor

class user1{
    // constructor
    constructor(){
        console.log("Nuevo usuario")
    }

    greeting(){
        return 'Hello World';
    }
}

const clix1 = new user1();

// this 

class user2{
    constructor(name){
        this.name = name;

    }
    speak(){
        return 'hello'
    }

    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const clix3 = new user2('Clinton');
console.log(clix3.greeting());


// getters and setters

class user4{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // metodos

    speak(){
        return 'hello'
    }

    greeting(){
       return `${this.speak()} ${this.name}}`
    }

    // getters
    // es para obtener el valor de una propiedad
    get uAge(){
        return this.age;
    }

    // es para establecer el valor de una propiedad
    set uAge(n){
        this.age = n;
    }

}


const clix4 = new user4('clinron', 99);
console.log(clix4.uAge);
console.log(clix4.uAge=20);