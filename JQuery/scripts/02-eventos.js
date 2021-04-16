$(function() {
    //MouseOver y MouseOut
    var caja = $("#caja").css("cursor", "pointer");
    var parrafoMouseInfo = $("#parrafoMousePos");

    // function cambiaOver(event) {
    //     $(this).css('background', '#ccc').css('color', 'black').css("transition", "300ms");
    //     var mouseX = [event.pageX, event.pageY];
    //     console.log(mouseX);
    // }

    // function cambiaOut() {
    //     $(this).css('background', 'lemonchiffon').css('color', 'black').css("transition", "300ms");
    // }
    //Hover, otra manera de manejar mouseout y mouseover
    // caja.hover(cambiaOver(event), cambiaOut);

    caja.on('mouseover', function(event) {
        $(this).css('background', '#ccc').css('color', 'black').css("transition", "300ms");
    });

    caja.on('mousemove', function(event) {
        parrafoMouseInfo.text(`La posicion del mouse: ${event.pageX}X y ${event.pageY}Y`);
    });

    caja.on('mouseout', function(event) {
        $(this).css('background', 'lemonchiffon').css('color', 'black').css("transition", "300ms");
    });

    //click y doble click
    caja.on('click', function() {
        $(this).css("background", "blue").css("color", "white").css("transition", "300ms");
    });

    caja.on("dblclick", function() {
        $(this).css("background", "pink").css("color", "red").css("transition", "300ms");
    })


    //Focus y blur
    var inputName = $("#nombre");
    inputName.on('focus', function() {
        $(this).css("border", "2px solid green");
    });

    inputName.on('blur', function() {
        $(this).css("border", "2px solid transparent");
        let valor = $(this).val();
        $("#datos").text(valor).show();
    })

});