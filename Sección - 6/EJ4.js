// Determinar cuál es el número mayor del arreglo

let numeros = [ 1, 6, 8, 4, 2, 7, 10, 3, 5];
let numMayor=0;

for(let i=0;i<=numeros.length;i++){

    if(numMayor<numeros[i]){
        numMayor=numeros[i];
    }
    
}
console.log('El número mayor es: ' + numMayor);