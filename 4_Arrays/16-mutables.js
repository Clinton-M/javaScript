const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


const productsIndex = products.findIndex(item => item.id === '🍔');

if(productsIndex !== -1){
    myProducts.push(products[productsIndex]);
    products.splice(productsIndex,1)
}




console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


if (productsIndex !== -1){
    myProducts.push(products[productsIndex]);
    products.splice(productsIndex, 1);
}


// update


const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🍔',
    change: {
        price: 200,
        description: 'Burger with cheese',
    }
};

// const productsIndex = products.findIndex(item => item.id === '🍔');

const productIndexv2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexv2] = {
    ...productsV2[productIndexv2],
    ...update.change,
}

console.log(productsV2);