//Arreglos y map

const carrito = ['Producto 1','Producto 2','Producto 3'];

console.log(carrito)

const appContenedor = document.querySelector('#app');
let html='';
carrito.forEach(producto =>{
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html;

//map

carrito.map(producto=>{
    return producto
})

//object keys
const persona = {
    nombre:'Juan',
    trabajo:'Developer',
    edad:500,
    musicaRock:true,
    mostrarInformacion: function(){
        console.log(this.nombre)
    }
}
console.log(Object.keys(persona))