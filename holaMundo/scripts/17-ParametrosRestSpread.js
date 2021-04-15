'use strict'

//Parametros Rest y spread
//Los parametros rest y spread, se definen con ...NombreVariable y representan un array de parametros

function listadoFrutas(fruta1, fruta2, ...restoFrutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(restoFrutas);

}

listadoFrutas("Naranja", "Manzana", "Sandia", "Melon");

var frutas = ["Naranjas", "Manzana"];

listadoFrutas(...frutas, "Naranja", "Manzana", "Sandia", "Melon")