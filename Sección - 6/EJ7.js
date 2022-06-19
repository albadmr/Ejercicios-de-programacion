//Función que encuentre el nombre mas largo en un arreglo

let heroes=['DeadpooL','Ciclope','Magneto','Profesor Charles Xavier'];




function masLargo(arr){
    let nombreLargo='';

   for(let j=0;j<arr.length;j++){
       let nombre=arr[j];
       if(nombre.length>nombreLargo.length){
           nombreLargo=nombre;
       }
    }
    return nombreLargo;

}

let heroesLargo= masLargo(heroes);
console.log(heroesLargo);