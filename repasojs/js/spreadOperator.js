const carrito = ['Producto 1','Producto 2','Producto 3'];
const carrito2 = ['Producto 3','Producto 4','Producto 5'];

//anterior
let combinacion = carrito.concat(carrito2);

//nueva
let combinacion2 = [...carrito,...carrito2];