'use strict'

$(function() {

    /*
    -Metodo load, permite hacer peticiones por get, e incrustrar el resultado en 
    algun elemento del DOM
    -Metodos Get y post
    -Metodo $.ajax, manejo de peticiones mas amplio
    */

    // $("#caja").load("https://jsonplaceholder.typicode.com/photos");

    var divDatos = $("#caja");
    var ReqUrl = "https://reqres.in/api/users";



    $.get(ReqUrl, { page: 1 },
        function(response, textStatus, jqXHR) {
            console.log(response);
            console.log(textStatus);
            console.log(jqXHR);

            response.data.forEach(user => {
                divDatos.append(`<p>${user.first_name}--${user.last_name}</p>`);
            });

        });

    $("#formUser").on("submit", function(event) {

        event.preventDefault();

        var newUser = {
            "name": $('input[name="name"]').val(),
            "job": $('input[name="job"]').val()
        };

        // $.post($(this).attr("action"), newUser,
        //     function(response, textStatus, jqXHR) {
        //         console.log(response);
        //     }
        // ).done(function() {
        //     alert("Usuario añadido correctamente");
        // });

        $.ajax({
            type: "POST",
            url: ReqUrl,
            data: newUser,
            dataType: "json",
            beforeSend: function() {
                console.log("Enviando usuario........")
            },
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error.statusText);
            },
            timeout: 2000
        });

        return false;
    });




});