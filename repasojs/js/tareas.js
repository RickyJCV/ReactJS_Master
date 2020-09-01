export const nombreTarea = 'Pasear al perro';

//exportar una funcion

export const crearTarea=(tarea,urgencia)=>{
    return tarea
}

//exportar clases
export default class Tarea{
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad=prioridad
    }
    mostrar(){
        return this.nombre;
    }
}