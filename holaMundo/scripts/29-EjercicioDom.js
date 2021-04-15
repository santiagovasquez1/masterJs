'use strict'

/* Se puede acceder tambien al control a traves del uso de this, cuando se usa el listener de un control
por ejemplo en la funcion callBack
*/

window.addEventListener("load", function() {

    var formulario = document.getElementById("formulario");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function() {
        console.log("evento submit capturado");
        box_dashed.style.display = "block";

        var nombreUsuario = document.getElementById("campoNombre").value;
        var apellidoUsuario = document.getElementById("campoApellido").value;
        var edadUsuario = parseInt(document.getElementById("campoEdad").value);
        var datosUsuarios = [nombreUsuario, apellidoUsuario, edadUsuario];

        if (validateTextControl(nombreUsuario, "nombre del usuario", "errorNombre") && validateTextControl(apellidoUsuario, "apellido del usuario", "errorApellido") && validateNumberControl(edadUsuario, "la edad del usuario", "errorEdad")) {
            datosUsuarios.forEach(datoUsuario => {
                var parrafo = document.createElement("p");
                parrafo.append(datoUsuario);
                box_dashed.append(parrafo);
            });
        }
    });


});

function validateTextControl(data, dataName, errorControlId) {
    if (data == null || data.length == 0) {
        document.getElementById(errorControlId).innerHTML = `${dataName} no es correcto`
        document.getElementById(errorControlId).style.display = "block";
        return false;
    } else {
        document.getElementById(errorControlId).style.display = "none";
        return true;
    }
}

function validateNumberControl(data, dataName, errorControlId) {
    if (!isNaN(data) == false || data <= 0) {
        document.getElementById(errorControlId).innerHTML = `${dataName} no es correcto`;
        document.getElementById(errorControlId).style.display = "block";
        return false;
    } else {
        document.getElementById(errorControlId).style.display = "none";
        return true;
    }
}