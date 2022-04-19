//el fichero se debe llamar igual a la clase
interface CamisetaBase {
    setColor(color);
    getColor();
}

//Creacion decorador
//Añade funciones a nuestra clase decorada
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function (): void {
            console.log("Camiseta estampada con el logo de " + logo);
        }
    };
}

// @estampar('Gucci')
class Camiseta implements CamisetaBase {

    private color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    constructor(color: string, modelo: string, marca: string, talla: string, precio: number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }
}

class Sudadera extends Camiseta {
    private capucha: boolean;


    setCapucha(capucha: boolean) {
        this.capucha = capucha;
    }


    getCapucha(): boolean {
        return this.capucha;
    }
}


var camiseta = new Camiseta('rojo', 'verano', 'nike', 'l', 15000);

var playera = new Camiseta('verde', 'verano', 'adidas', 'l', 65000);

var sudadera = new Sudadera('verde', 'verano', 'adidas', 'l', 65000);
sudadera.setCapucha(true);

console.log(camiseta, playera, sudadera);
