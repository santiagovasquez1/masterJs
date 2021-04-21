var bicicleta = /** @class */ (function () {
    function bicicleta(marco, freno) {
        this.marco = marco;
        this.freno = freno;
    }
    return bicicleta;
}());
var newBicke = new bicicleta(12, 'Pasta');
newBicke.valor = 15;
console.log(newBicke);
