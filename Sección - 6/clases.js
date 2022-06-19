class Carro {
    constructor(marca,tipo,puertas){
        this.marca=marca;
        this.tipo=tipo;
        this.puertas=puertas;
        this.creadoEn='hoy';
        this.encendido=false;
    }
    encenderCarro(){
        if(this.encendido){
            console.error('El carro ya está encendido');
        }
        else{
            this.encendido=true;
            console.log('El carro está encendido');
        }
        return this;
    
    }

    return this;
}


let carro = new Carro('mazda','sedan','4');
