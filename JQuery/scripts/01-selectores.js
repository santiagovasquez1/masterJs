// $(document).ready(function() {
//     console.log("Jquery cargado correctament");
// });

/*
 todas las funcionalidades de jquery se invocan primero con el signo $
*/

//Forma de hacer el windows load en jquery
$(function() {
    console.log("Jquery cargado correctament");
    //Selector de id
    var rojo = $("#rojo");
    var amarillo = $("#amarillo");
    var verde = $("#verde");

    //El metodo css, permite encadenamiento 
    rojo.css("background", "red").css("color", "white");
    amarillo.css('background', 'yellow').css("color", "green");
    verde.css('background', 'green').css("color", "white");

    //Selectores de clase
    var zebraClass = $(".zebra");
    // zebraClass.css("border", "2px dashed #ccc");
    console.log(zebraClass);
    //permite seleccionar un solo objeto dentro del array
    console.log(zebraClass.eq(1));

    //Sustituto del evento click en la nueva version de Jquey
    $(".sinBorde").on("click", function() {

        console.log("Click en el div");
        console.log($(this));

        var hasClass = $(this).hasClass('zebra');
        console.log(hasClass);
        if (!hasClass) {
            $(this).addClass('zebra');
        } else {
            $(this).removeClass('zebra');
        }

    });

    zebraClass.on("mouseover", function() {

        var hasClass = $(this).hasClass('overDiv');
        if (!hasClass) {
            $(this).addClass('overDiv');
        }
    });

    zebraClass.on("mouseout", function() {
        var hasClass = $(this).hasClass('overDiv');
        if (hasClass) {
            $(this).removeClass('overDiv');
        }
    });

    //Selectores de etiqueta
    var parrafos = $("p").css("cursor", "pointer");
    parrafos.on('click', function() {
        var control = $(this);
        var hasClass = control.hasClass('grande');

        if (!hasClass) {
            control.addClass('grande');
        } else {
            control.removeClass('grande');
        }
    });

    //Selectores de atributos
    $('[title="google"]').css('background', '#ccc');
    $('[title="youtube"]').css('background', 'red');

    //Seleccionar varios elementos
    $('p, a').addClass('margenSup');

    //Encontrar un elemento dentro de un arbol html
    var busqueda = $('#caja').find('.resaltado');

    //Encontrar el parent del nodo html
    var parent = $('#caja .resaltado').eq(0).parent().find('[title="google"]');

    console.log(busqueda);
    console.log(parent);
});