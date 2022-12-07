function videoPlay(id){
    const url = `https://platzi.com/clases/${id}`
    console.log(`Reproduciendo video ${url}`)
}


// export 
class platziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name
        this.videoID = videoID
    }

    reproducir(){
        console.log(`${this.name} se esta reproduciendo`)
        videoPlay(this.videoID)
    }

    pausar(){
        console.log(`${this.name} se pauso`)
        videoSTOP(this.videoID)
    }

}

class Student{
    constructor({
        name,
        username,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name
        this.username = username
        this.email = email
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
        
        
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn('Lo sentimos, ' + this.name + ', solo puedes tomar cursos abiertos')
        }
    }

}

class BasicStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.lang !== 'english'){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn('Lo sentimos, ' + this.name + ', no puedes tomar cursos en ingles')
        }
    }

}

class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }


}


class LearningPath{
    constructor({
        name,
        courses = [],
    }){
        this.name = name
        this.courses = courses
    }
}





const escuelaWeb = new LearningPath({
    name: 'Escuela de Desarrollo Web',
    courses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS',
        'Curso de Responsive Design',
    ]
})

const escuelaData = new LearningPath({
    name: 'Escuela de Data Science',
    courses: [
        'Curso de Data Science',
        'Curso de Machine Learning',
        'Curso de Big Data',
    ]
})

const escuelaVgs = new LearningPath({
    name: 'Escuela de Videojuegos',
    courses: [
        'Curso de Unity',
        'Curso de Unreal',
        'Curso de 3D',
    ]
})


class courses{
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = 'spanish',
    }){
        this._name = name
        this.classes = classes
        this.isFree = isFree
        this.lang = lang
    }

    get name(){
        return this._name
    }

   set name(newName){
         if(newName === 'Curso Malito de Programacion Basica'){
              console.error('Web... no')
         }else{
              this._name = newName
         }
    }
}




const cursoProgramacionBasica = new courses({
    name: 'Curso Gratis de Programacion Basica',
    classes: [ ],
    isFree: true

})

const cursoDefinitivoHTML = new courses({
    name: 'Curso Definitivo de HTML y CSS',
    classes: [ ],
    
})

const cursoPracticoHTML = new courses({
    name: 'Curso Practico de HTML y CSS',
    classes: [ ],
    lang: 'english'
})

const miguel = new FreeStudent({
    name: 'Miguel',
    username: 'miguelDC',
    email: 'aaa@gmail.com',
    twitter: 'miguelDC_',
    instagram: 'fmiguelDC',
    facebook: undefined,
    approvedCourses: [
        cursoProgramacionBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,

    ],
    learningPaths: [
        escuelaWeb,
        escuelaData,
        escuelaVgs,
    ]
    
})

cursoProgramacionBasica.name = 'Curso Malito de Programacion Basica'
miguel.approveCourse(cursoProgramacionBasica)

console.log(miguel.approveCourse(cursoDefinitivoHTML)) // lo siento miguel, solo puedes tomar cursos abiertos


