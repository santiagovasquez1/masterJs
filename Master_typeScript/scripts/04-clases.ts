//el fichero se debe llamar igual a la clase

class Camiseta {

    private color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    constructor(color:string,modelo:string, marca:string,talla:string,precio:number) {
        this.color=color;
        this.modelo=modelo;
        this.marca=marca;
        this.talla=talla;
        this.precio=precio;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }    
}

var camiseta = new Camiseta('rojo','verano','nike','l',15000);

var playera = new Camiseta('verde','verano','adidas','l',65000);

console.log(camiseta, playera)
