'use strict'

/*
    Trabajo con el BOM (Browser Object Model)
*/
getWindowsSize();

function getWindowsSize() {
    console.log(`El ancho de la ventana es: ${window.innerWidth} y el ancho de la ventana es: ${window.innerHeight}`);
    console.log(`El ancho de la pantalla es: ${screen.width} y el ancho de la pantalla es: ${screen.height}`);
    console.log(window.location);
}

function reditectUrl(url) {
    window.location.href = url;
}

function nuevaPestania(url) {
    window.open(url, "", "width=400, height=200");
}