//el fichero se debe llamar igual a la clase
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta('rojo', 'verano', 'nike', 'l', 15000);
var playera = new Camiseta('verde', 'verano', 'adidas', 'l', 65000);
console.log(camiseta, playera);
