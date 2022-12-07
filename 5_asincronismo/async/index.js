const fnAsync =()=>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async'),2000)
        :reject(new Error('Test Error'))
    })
}


const anotherFn = async() =>{
    const something = await fnAsync();
    console.log(something);
    console.log("hello ");
}

console.log('Before 1');
anotherFn();
console.log('After 1');