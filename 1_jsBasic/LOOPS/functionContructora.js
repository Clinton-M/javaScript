//function constructora

function auto(marca, modelo, annio, annio){   
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.color = annio;
}

//creamos un nuevo objeto
var autoNuevo = new auto("Tesla", "Model 3", 2020, "rojo");
var autoNuevo2 = new auto("Tesla", "Model X", 2018, "negro");


console.log(autoNuevo)
console.log(autoNuevo2)