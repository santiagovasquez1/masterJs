'use strict'

$(function() {

    if (window.location.href.indexOf('index') >= 0) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: false
        });
    }

    if (window.location.href.indexOf('index') >= 0) {
        var urlService = "https://jsonplaceholder.typicode.com/posts";
        var divforPosts = $("#posts");

        $.ajax({
            type: "GET",
            url: urlService,
            data: "data",
            dataType: "json",
            success: function(response) {
                response.forEach(post => {
                    var date = `Publicado el dia ${moment().date()} de ${moment().format('MMMM')} del ${moment().format('YYYY')}`;
                    var plantillaHtmlForPost = `
                    <article class="post">
                        <h3>${post.title}</h3>
                        <span class="date">${date}</span>
                        <p>${post.body}</p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
                    `;
                    divforPosts.append(plantillaHtmlForPost);
                });
            }
        });
    }

    //Selector del tema
    var themeSelector = $("#theme");


    $("#toGreen").on('click', function() {
        themeSelector.attr('href', 'css/green.css');
    });

    $("#toBlue").on('click', function() {
        themeSelector.attr('href', 'css/blue.css');
    });

    $("#toRed").on('click', function() {
        themeSelector.attr('href', 'css/red.css');
    });


    //Scroll para ir arriba en la web

    $('.subir').on('click', function(event) {
        console.log('arriba');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 500);

        return false
    });


    //Login falso a travez de local storage

    var loginFalse = $("#login form");


    var user = loadUser({
        name: "",
        email: ""
    });

    loginFalse.on('submit', function(event) {
        user = {
            name: $("#name").val(),
            email: $("#email").val()
        };
        localStorage.setItem("formUser", JSON.stringify(user));
    });


    //Acrodeon
    if (window.location.href.indexOf('about') >= 0) {
        $("#acordeon").accordion();
    }

    //Reloj
    if (window.location.href.indexOf('reloj') >= 0) {

        setInterval(() => {
            var reloj = moment().format('h:mm:ss a');
            $("#reloj").html(reloj);
        }, 1000);

    }

    if (window.location.href.indexOf('contact') >= 0) {

        $("form input[name='bornDate']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            erroMessagePosition: 'top'
        });


    }

});

function loadUser(user) {
    if (localStorage.getItem("formUser") !== null) {
        console.log("Existe usuario");
        user = JSON.parse(localStorage.getItem('formUser'));
        $("#name").val(user.name);
        $("#email").val(user.email);

        var about = $("#about p")
        about.html(`<br><strong>Bienvenido ${user.name} tu email es ${user.email}</strong>`);
        about.append(`<a href="#" id="logout">Cerrar sesión</a>`);

        $("#login").hide();

        $("#logout").on('click', function() {
            localStorage.removeItem("formUser");
            location.reload();
        });

    }
    return user;
}