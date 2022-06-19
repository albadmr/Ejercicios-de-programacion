// Determinando si los números son pares o impares

let numeros=[1,6,8,4,2,7,10,3,5];
//let decimal=false;

for (let i=0;i<numeros.length;i++){
    
    if(numeros[i]%2>0){
        console.log('El '+numeros[i]+' es impar.');
    
    }else{
        console.log('El '+numeros[i]+' es par.');

    }
}