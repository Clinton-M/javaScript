const totales = [1,2,3,4,]


const suma = totales.reduce((count, items)  => count + items, 0);
console.log(suma);


const sumValores = totales.reduce((au,item) =>au + item,0);
console.log(sumValores);