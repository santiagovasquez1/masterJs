console.log("Hola mundo 3");
/*
    Diferencia entre var y let
    var es a nivel global de la variable
    y let es a nivel local de la funcion
*/
window.addEventListener('load', function () {
    var numero1 = 10;
    var numero2 = 12;
    var prueba = document.querySelector("#prueba");
    prueba.addEventListener('click', function () {
        console.log("Hola");
    });
    if (numero1 == 10) {
        var numero1_1 = 44;
        var numero2 = 55;
        console.log(numero1_1, numero2);
    }
    console.log(numero1, numero2);
});
