//Distinguir iniciales

let nuevoArr=[];
function filtrarPorLetra(arr,letra){
    for(let j=0;j<arr.length;j++){
        let nombre=arr[j];
        if(nombre[0]===letra){
            nuevoArr.push(nombre);
        }
    }
    return nuevoArr;
        
}

let heroes=['Doom','Dr.Strange', 'She Hulk','Spiderman','Captain Marvel'];
let heroesCon=filtrarPorLetra(heroes,'D');
console.log(heroesCon);