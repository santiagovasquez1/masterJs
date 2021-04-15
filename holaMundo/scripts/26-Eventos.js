'use strict'
/*
    Manejo de eventos con JavaScrip
    **Eventos del raton**
*/

var boton = document.getElementById("btPresioname");

/*
    Uso de add event listener
*/

boton.addEventListener('click', cambiaColor);
boton.addEventListener('dblclick', dobleClick);

boton.addEventListener('mouseover', function() {
    boton.style.background = "#ccc";
});

boton.addEventListener('mouseout', function() {
    boton.style.background = "#17ad17";
})

var divsRojos = document.querySelectorAll('.rojo');
var divsAmarillos = document.querySelectorAll('.amarillo');

eventsToElementsDiv(divsRojos, "green", "red");
eventsToElementsDiv(divsAmarillos, "blue", "yellow");

/*
    Eventos del teclado y foco etc
*/


//focus se invoca cuando se entra dentro del control
var input = document.getElementById("campoNombre");

input.addEventListener('focus', function() {
    console.log("Estas dentro del input");
});
//blur se invoca cuando se sale del control
input.addEventListener('blur', result => {
    console.log(result);
    console.log("Estas fuera del input");
});

//keydown, se invoca cuando se pulsa una tecla dentro del control
input.addEventListener('keydown', result => {
    console.log(`Estas pulsando la tecla ${result.key} y su keyCode es: ${result.keyCode}`);
});
//keypress
input.addEventListener('keypress', result => {
    console.log(`pulsaste la tecla ${result.key} y su keyCode es: ${result.keyCode}`);
});

//keyup, captura el elemento cuando se levanta del dedo de la tecla
input.addEventListener('keyup', result => {
    console.log(`soltaste la tecla ${result.key} y su keyCode es: ${result.keyCode}`);
});


function eventsToElementsDiv(divsArray, color1, color2) {
    divsArray.forEach(div => {
        div.addEventListener('mouseover', changeColor => {
            div.style.background = color1;
        });
        div.addEventListener('mouseout', changeColor => {
            div.style.background = color2;
        });
    });
}

function cambiaColor() {
    if (boton.style.background == "green") {
        boton.style.background = "blue";
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
    } else {
        boton.style.background = "green";
        boton.style.padding = "5px";
        boton.style.border = "1px solid #fff";
    }
}

function dobleClick() {
    alert("Has dado doble click");
}