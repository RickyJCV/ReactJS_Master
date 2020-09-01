//destructuring de objetos

const aprendiendoJS ={
    version:{
        nueva:'ES6',
        anterior:'ES5'
    },
    frameworks: ['React','Vue','AngularJS']
}

//destructuring es extraer valor de objeto


//version anterior
let version = aprendiendoJS.version.nueva;
let framework = aprendiendoJS.frameworks[1];

//version nueva
let {version,frameworks}=aprendiendoJS;
console.log(version)
