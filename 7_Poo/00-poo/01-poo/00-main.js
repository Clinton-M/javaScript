const natalia = {
    name : 'Natalia',
    age : 30,
    cursosAprobados : [
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS'
    ],

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    },
};

// hacer qie Natalia apruebe un curso mas
natalia.cursosAprobados.push('Curso de Responsive Design')
natalia.name = 'Nath'



natalia.aprobarCurso('Curso de Javascript Profesional')

console.log(natalia.cursosAprobados)



function Student(name, edad, cursosAprobados){
    this.name = name
    this.edad = edad
    this.cursosAprobados = cursosAprobados

//     this.aprobarCurso = function(nuevoCurso){
//         this.cursosAprobados.push(nuevoCurso)
//     }
 }

Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
}

const juanita = new Student('Juanita', 15, ['Curso de HTML', 'Curso de CSS'])

juanita.aprobarCurso('Curso de Javascript Profesional')
console.log(juanita)


// prototype con la sintaaxis de clases

class Student2{
    constructor({
        name,
        edad,
        cursosAprobados =[],
    }){
        this.name = name
        this.edad = edad
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

const miguel  =new Student2({
    name: 'Miguel', 
    edad: 20, 
    cursosAprobados: ['Curso de HTML', 'Curso de CSS']})

miguel.aprobarCurso('Curso de Javascript Profesional')

console.log(miguel)