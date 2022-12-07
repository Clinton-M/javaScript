function fruits(){
    if(true){
        var fruit1 = 'Apple'; // var is function scoped
        let fruit2 = 'kiwki'; //let solo funciona dentro del bloque
        const fruit3 = 'Banana'; //const solo funciona dentro del bloque
        
        console.log(fruit2)
        console.log(fruit3)
    }

    console.log(fruit1)
    
}

fruits()