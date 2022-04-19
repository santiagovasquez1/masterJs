'use strict'

$(function() {
    //Hacer que los divs se puedan mover por la pantalla
    var elementos = $(".element");
    elementos.draggable();

    //redimencionamiento
    elementos.resizable();

    elementos.on('mouseover', function() {
        elementos.css('cursor', 'pointer');
    });

    //Seleccionar elementos  desde jquery
    // var UlElement = $(".lista-seleccionable").selectable();
    var UlElement = $(".lista-seleccionable");
    UlElement.sortable({
        update: function(event, ui) {
            console.log("Has cambiado la lista");
        }
    });

    // var liElements = $(".lista-seleccionable li");

    // liElements.on('mouseover', function() {
    //     $(this).css('background', 'black').css('color', 'white');
    // });

    // liElements.on('mouseout', function() {
    //     $(this).css('background', 'white').css('color', 'black');
    // })


    //dropable
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function() {
            console.log("Elemento dentro de area");
        }
    });


    //Efectos
    $("#mostrar").on("click", function() {
        var divEfectos = $(".caja-efectos")
        divEfectos.effect('puff', "slow");

    });

    $(document).tooltip();
    // $("#popup").css('display', 'none');
    $("#lanzarPopup").on('click', function() {
        $("#popup").dialog();
    })

    $("#calendario").datepicker();


    $("#tabs").tabs();
});