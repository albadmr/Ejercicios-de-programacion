let persona={
    nombre:'Fernando',
    edad: 32,
    estatura:1.79
}
describirPersona(persona);

function describirPersona(p){
    console.log(`${p.nombre} tiene una edad de ${p.edad} años y mide ${p.estatura}`)
}