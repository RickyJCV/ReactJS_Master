//objetos

function mostrarInformacionTarea(tarea, prioridad){
    return `La tarea ${tarea} con ${prioridad}`
}

//object literal

const persona = {
    nombre: 'Juan',
    profesion: 'Developer',
    edad: 500
}

console.log(persona.nombre)
console.log(persona)
console.log(persona['edad'])

//object constructor
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia =urgencia;
}

//nueva tarea
const tarea1 = new Tarea('React','Urgente');
console.log(tarea1)

const mostrarInfo = mostrarInformacionTarea(tarea1.nombre,tarea1.urgencia)