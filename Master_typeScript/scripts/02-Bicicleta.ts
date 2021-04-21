class bicicleta {
    
    marco:alfaNumerico;
    freno:string;
    valor:Number;
    
    constructor(marco:string|number,freno:string) {
        this.marco=marco;
        this.freno=freno
    }
}

//Creacion de tipo de dato
type alfaNumerico=string|number


var newBicke=new bicicleta(12,'Pasta');
newBicke.valor=15;
console.log(newBicke);