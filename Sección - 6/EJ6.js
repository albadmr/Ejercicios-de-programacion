// Función que recibe 3 argumentos numéricos

let mayor;

function saludar (a,b,c){
    
    if(a>b && a>c){
        mayor=a;
    } else if( b>c){
        mayor=b;
    } else{
        mayor=c;    }
    return mayor;
}

saludar(9,7,5);
console.log(mayor+' es el mayor');