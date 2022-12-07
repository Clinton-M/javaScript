const helloWorld = () => 'Hola, mundo🌎'


helloWorld()

//lista de datos

var lista=["hola","mejia","clinton"];

console.log(lista);


console.log(lista.length);

for(var i=0; i<lista.length;i++){
  console.log(lista[i])
}

//agregando mas elementos

var maslista = lista.push("chuchon")

console.log(lista)

//eliminando elemento

var eliminarElemento = lista.pop("chuchon")

console.log(lista)

//agregar un nuevo valor al nicio

var agregarInicio=lista.unshift("alcidez")
console.log(lista);
console.log(lista.length)

//shift elimina al inicio position 0 sacar**

var borrarLista = lista.shift("alcidez")
console.log(lista)

//posicion del elemento

var position = lista.indexOf("mejia")
console.log("position in -> " + position)