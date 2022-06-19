let persona1={
    nombre:'Fernando',
    edad: 32,
    estatura:1.79
}

let persona2={
    nombre:'Melissa',
    edad: 12,
    estatura:1.49
}
let persona3={
    nombre:'Juan',
    edad: 22,
    estatura:1.90
}

let personas =[persona1,persona2,persona3];

for (let i=0;i<personas.length;i++){
    
    console.log(`${personas[i].nombre} -- ${personas[i].edad}`)
}