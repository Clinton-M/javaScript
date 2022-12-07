// un funcion de devulve  suma de a y b pero si no entra valor de a o v mostrat solo

function sumWithClosure(firstNum){
    function anidado(secondNum){
        if (secondNum){
            return firstNum + secondNum;
        }
        return firstNum;
    }
    return anidado;
}

sumWithClosure(2)(3);

// mas corto

function sumWithClosure(firstNum){
    return function(secondNum = 0){
        
        return firstNum + secondNum;
    }
}

sumWithClosure(2)(3);