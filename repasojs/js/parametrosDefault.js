//Parametros por default en las funciones

function actividad(nombre = 'Walter', actividad = 'Quimica') {
    console.log(`La persona ${nombre}, esta realizando ${actividad}`)
}

actividad('Juan', 'Aprender Javascript');
actividad();