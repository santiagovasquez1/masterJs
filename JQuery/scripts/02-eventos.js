$(function() {
    //MouseOver y MouseOut
    var caja = $("#caja").css("cursor", "pointer");
    var parrafoMouseInfo = $("#parrafoMousePos");
    var datos = $("#datos");


    caja.on('mouseover', function(event) {
        $(this).css('background', '#ccc').css('color', 'black').css("transition", "300ms");
    });

    $(document).on('mousemove', function(event) {
        $("#Sigueme").css("left", event.clientX).css("top", event.clientY);
        // caja.css("left", event.clientX).css("top", event.clientY);
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


    //Mouse up y mouse down, eventes que se activan cuando se presiona o se suelta el mouse
    datos.on('mousedown', function(event) {
        $(this).css("border-color", "gray");
    });

    datos.on('mouseup', function(event) {
        $(this).css("border-color", "black");
    });


    //Focus y blur
    var inputName = $("#nombre");
    inputName.on('focus', function() {
        $(this).css("border", "2px solid green");
    });

    inputName.on('blur', function() {
        $(this).css("border", "2px solid transparent");
        let valor = $(this).val();
        datos.text(valor).show();
    })



});