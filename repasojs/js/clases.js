//POO CLASES

class Tarea{
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad=prioridad
    }
    mostrar(){
        return this.nombre;
    }
}

//HERENCIA

class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad, cantidad){
        super (nombre, prioridad);
        this.cantidad = cantidad

    }
    mostrar(){
        super.mostrar();
        return 'Hola'
    }
    hola(){
        return 'Hola'
    }
}

//objetos
let tarea1 = new Tarea('Aprender JS','Alta')

console.log(tarea1.mostrar());

//compras
let compra1 = new ComprasPendientes('Jabon', 'Urge', 3)