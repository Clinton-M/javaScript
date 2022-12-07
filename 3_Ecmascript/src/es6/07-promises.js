const anotherFuncton = () =>{
    return new Promise((resolve, reject)=>{
        if (true){
            setTimeout(()=>{
                resolve('Hey!')
            }, 2000)
        }else{
            const error = new Error('ups!');
            reject(error);
        }
    })
}

anotherFuncton()
    .then(response => console.log(response))
    .catch(err => console.log(err)); 











   
 //




//
const numeros = [1,2,3,4,5,6,7,8,9]

// numeros.forEach(function(el,undex){
//     console.log(`el elemento ${el} esta en la posicion ${undex}`)
// })

numeros.forEach((el,index) =>{
    console.log(`${el} esta en la posicion ${index}`);

})

numeros.forEach((el, indice)=>{
    console.log(`${el} esta en la posicion ${indice}`);
})