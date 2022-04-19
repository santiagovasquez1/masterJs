'use strict'

$(function() {

    var caja = $("#caja").hide();
    var toogleBtn = $("#toogle");
    var animarBtn = $("#animar");
    var isMove = false;

    $("#ocultar").hide();

    $("#mostrar").on("click", function() {
        $(this).hide();
        $("#ocultar").show();
        // caja.show('normal');
        caja.fadeIn('normal');
        //La funcion fadeTo, cambia la transcion de la imagen, de acuerdo al grado de opacidad
        // caja.fadeTo('normal', 0.8);
    });

    $("#ocultar").on("click", function() {
        $(this).hide();
        $("#mostrar").show();
        // caja.hide('normal');
        caja.fadeOut('normal');
    });

    toogleBtn.on('click', function() {
        caja.fadeToggle('normal', 'linear');
    });

    animarBtn.on('click', function() {
        /*Metodo que permite hacer animaciones css, 
        se debe pasar un objeto json
        */
        var propToMove = {
            marginLeft: '500px',
            borderRadius: '10px'
        };

        var moveToInit = {
            marginLeft: '0px',
            borderRadius: '0px'
        }

        if (!isMove) {
            isMove = true;
            caja.animate(propToMove, 1000, function() {
                console.log("Animacion terminada");
            });
        } else {
            isMove = false;
            caja.animate(moveToInit, 1000, function() {
                console.log("Animacion terminada");
            });
        }

    });
});