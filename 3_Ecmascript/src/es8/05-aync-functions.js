const testAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=>resolve('Resvole'),3000)
            : reject(new Error('Error!'))
    });
}

const anotherFn = async() =>{
    const something = await testAsync();
    console.log(something);
    console.log("hello");
}

// salir

console.log("before");
anotherFn();
console.log("after");