'use strict';
pi = 3.1416;
// var = pi undefined
console.log(pi);
// error: pi is not defined when use strict

function myFunction(){
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());
// error: pi is not defined when use strict