const myGlobal = 0;

function myfunction(){
    const myNumber = 1;
    console.log(`${myGlobal}`) 

    function parent(){ // function interna
        const inner = 2;
        console.log(`f.fuera ${myNumber} f.inter ${myGlobal}`)


        function child(){
            console.log(`f.fuera ${inner} f.inter ${myNumber} f.ff ${myGlobal}`)
        }

        return child()

    }
    
    return parent()
}

myfunction()
