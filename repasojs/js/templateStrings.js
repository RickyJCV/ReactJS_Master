// TEMPLATE STRINGS

const nombre = 'Juan';
const trabajo = 'Desarrollador Web';

//concatenar JS
console.log('Nombre: '+nombre + ', Trabajo: '+trabajo);
console.log(`Nombre: ${nombre} , Trabajo: ${trabajo}`);

//concatenar con multples lineas
const contenedorApp = document.querySelector('#app');

let html = `
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Trabajo: ${trabajo}</li>
    </ul>
    `;
contenedorApp.innerHTML = html;