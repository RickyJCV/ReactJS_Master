const personas =[
    {nombre: 'Juan', edad: 23},
    {nombre: 'Pep', edad: 24},
    {nombre: 'Rick', edad: 44},
    {nombre: 'Lorena', edad: 78},
    {nombre: 'chema', edad: 10},
]

//mayores de 28
const mayores = personas.filter(persona=>{
    return persona.edad>28;
})
console.log(mayores);

//que edad tiene lorena
const lorena = personas.find(persona=>{
    return persona.nombre === 'Lorena';
})
console.log(lorena.edad)

//edad total
let total = personas.reduce((edadTotal,persona)=>{
    return edadTotal + persona.edad;
}, 0)


console.log(total/personas.length)