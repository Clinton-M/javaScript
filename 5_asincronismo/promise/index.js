const promise = new Promise(function(resolve, reject){
    resolve("hey!")
})


const cows = 9;

const countCouw = new Promise(function(resolve,reject){
    if(cows >10){
        resolve(`we have ${cows} cows on the farm`);
    }else{
        reject("there is no cows on the farm");
    }
})

countCouw.then((resultado) =>{console.log(resultado);})
         .catch((error)=>{console.log(error);})
         .finally(()=>console.log("finally"))