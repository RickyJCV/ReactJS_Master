const persona = {
    nombre:'Juan',
    trabajo:'Developer',
    edad:500,
    musicaRock:true,
    mostrarInformacion: function(){
        console.log(this.nombre)
    }
}

persona.mostrarInformacion();