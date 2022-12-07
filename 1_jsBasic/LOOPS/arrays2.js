   //arrays2
var articulos = [
    {nombre:"bici", costo:300},
    {nombre: "television", costo:2500},
    {nombre: "libro", costo:300},
    {nombre: "celular", costo:1000},
    {nombre: "laptop", costo: 2000},
    {nombre: "teclado", costo:500},
    {nombre: "audifonos", costo:1700},
  ];
  
  //1

  var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo<=500 
  })
  
  console.log(articulosFiltrados)

  //2

  var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
  })

console.log(nombreArticulos)

//3 especifico

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre ==="bici"
  })
  
  encuentraArticulo
  
  //4 foreach
  
  articulos.forEach(function(articulo){
    console.log(articulo.nombre)
  })
  
  //some
  var articulosVaratos = articulos.some(function(articulo){
    return articulo.costo <=700
  })
  
  articulosVaratos
  