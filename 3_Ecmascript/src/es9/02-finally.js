const anotherFuncton = () =>{
    return new Promise((resolve, reject)=>{
        // if (true){
        //     setTimeout(()=>{
        //         resolve('Hey!')
        //     }, 2000)
        // }else{
        //     const error = new Error('ups!');
        //     reject(error);
        // }
        (true)
        ? setTimeout(()=>resolve('hey'),2000)
        :reject(new Error('ups!'))
        
    })
}

anotherFuncton()
    .then(Response =>console.log(Response))
    .catch(err => console.log(err))
    .finally(()=> console.log('Finalizo'))



