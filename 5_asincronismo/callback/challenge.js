const XMLhttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://api.escuelajs.co/api/v1';

function fechData(urlAPI, callback){
    let xhttp = new XMLhttpRequest(); 

    xhttp.open('GET',urlAPI, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState ===4){
            if(xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText));
            }else{
                const error = new Error ('Error'+ urlAPI);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fechData(`${API}/products`,function(error1,data1){
    if(error1) return console.error(error1);
    fechData(`${API}/products/${data1[0].id}`, function(erro2, data2){
        if(erro2) return console.error(erro2);
        fechData(`${API}/categories/${data2?.category?.id}`, function(erro3, data3){
            if(erro3) return console.error(erro3);
            console.log(data1[10]); 
            console.log(data2.title)
            console.log(data3.name); 
        })
    })
})

