// crear una funcion

//FUNCTION DECLARATION SE PUEDE EJECUTAR ANTES DE DECLARAR
function saludar(nombre) {
    console.log('Bienvenido ' + nombre)
}

saludar('Ricardo');

//FUNCTION EXPRESSION REACT TIENES QUE DECLARAR ANTES DE EJECUTAR
const cliente = function (nombreCliente) {
    console.log('Datos ' + nombreCliente)
}

cliente('Juan');