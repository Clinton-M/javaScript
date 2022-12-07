var estudiante = ["clinton", "luz", "maria", "daniela"];

function saludarEstudiante(estudiante) {
    console.log(`hola , ${estudiante}`);
}

//con este loop pasamos uno en uno los nombres al metodo saludarEstudiante
for(var i=0; i<estudiante.length; i++){
    saludarEstudiante(estudiante[i]);
}

//for simple
for(var j of estudiante){
    saludarEstudiante(j);
}