'use strict'

/*
    JSON-JavaScript object notation
    permite realizar una especie de array asociativo, 
    es util para poder crear objetos con sus propiedades, 
    util para enviar y recibir datos de una manera ligera
    es un estandar altamente adaptado para lenguajes backend
*/
var peliculas = [{
    titulo: "La verdad duele",
    year: 2016,
    pais: "Fancia"
}, {
    titulo: "Batman vs Superman",
    year: 2017,
    pais: "Estados unidos"
}, {
    titulo: "La mujer maravilla",
    year: 2020,
    pais: "Estados Unidos"
}]

var divPeliculas = null;

window.addEventListener('load', function() {

    divPeliculas = document.getElementById("peliculas");
    var listadoPeliculas = document.createElement("ul");

    peliculas.forEach(pelicula => {
        var li = document.createElement("li");
        var tituloMovie = document.createElement("h3");
        var infoMovie = document.createElement("p")

        tituloMovie.append(`Titulo :${pelicula.titulo}`);
        infoMovie.append(`El año de la pelicula es ${pelicula.year}---El pais de la pelicula es: ${pelicula.pais}`);
        li.append(tituloMovie);
        li.append(infoMovie);
        listadoPeliculas.append(li);
    });

    divPeliculas.append(listadoPeliculas);
});

window.addEventListener('resize', result => {
    var windowWidth = this.innerWidth
    var divExample = document.getElementById("localStorageInfo");


    if (divExample !== null && divPeliculas !== null) {
        var widht = windowWidth - 350;
        divExample.style.width = `${widht}px`;
    }
});