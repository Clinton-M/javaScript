// arrays destructuring

let fruits = ['apple', 'banana', 'orange'];
let [a,b] = fruits;

console.log(a,fruits[1]);

// objects destructuring

let user ={
    name: 'oscar',
    age: 32,
    country: 'MX'
}

let {name,age} = user;
console.log(name,user.age);


//-------------------**********************
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

//******************************************* */

// espread operator

let person = {
    name: 'clinton',
    age: 32,
}

let country = 'MX'

let data = {id:1,...person,country}
console.log(data)

// rest 

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,2,3,4,5,6,7,8,9,10);


//
export function solution(
    json1 = {
      name: 'Clinton',
      foot: 'Ceviche',
    },
    
    json2 = {
      age: 99,
      color: 'white',
    }
  ) {
  
    return { 
        ...json1,
        ...json2,
    };
  }

  
  //
  export function solution(
    json1 = {
      name: "Mr. Michi",
      food: "Pescado",
    },
    json2 = {
      age: 12,
      color: "Blanco",
    }
  ) {
    return {
      ...json1,
      ...json2,
    };
  }


  //

function solution(
    json1 = {
        name: "Clinton",
        food: "Ceviche",
    },
    json2 = {
        age: 99,
        color: "white",
    }){
    return{
        ...json1,
        ...json2
    }
  };

let sale = solution();
console.log(sale);