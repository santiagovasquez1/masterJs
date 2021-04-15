'use strict'

//Local storage, memoria que guarda los datos de nuestra sesion


function haveLocalStorage() {
    if (typeof(Storage) !== 'undefined') {
        console.log("LocalStorage disponible");
        return true;
    } else {
        console.log("Local storage, no esta disponible")
        return false
    }
}

window.addEventListener('load', function() {
    //Almacenamiento de datos

    localStorage.setItem("titulo", "Curso de js");

    //Recuperar el elmento
    console.log(localStorage.getItem("titulo"));

    //Guardar objeto json
    var usuario = {
        nombre: "Santiago",
        email: "santivasquez@gmail.com"
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));

    //Recuperar obejto
    var user2 = JSON.parse(localStorage.getItem("usuario"));
    console.log(user2);

    //localStorage.removeItem("usuario");
});