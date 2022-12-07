//objetos
var miAuto = {
    //clave:valor
    marca:"toyota",
    modelo:"corolla",
    annio:2020,
    //function que regresa conjunto de detalls
    detalleDelAuto:function(){
      console.log(`Auto ${this.modelo} ${this.annio}`)
    }
    
  };
  
  
  miAuto.detalleDelAuto();