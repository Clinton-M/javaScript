import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';


function fetchData(urlApi){
    return fetch(urlApi);
}

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products =>{
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(`El producto es ${category.name}`)
    })
    .catch(erroe => console.log(error))
    .finally(() => console.log('Finalizo'))

