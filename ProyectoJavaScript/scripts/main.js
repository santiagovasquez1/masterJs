'use strict'

$(function() {

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: false
    });

    // moment().format('MMM dddd YYYY')

    // var posts = [{
    //     title: 'Titulo 1',
    //     date: `Publicado el dia ${moment().date()} de ${moment().format('MMMM')} del ${moment().format('YYYY')}`,
    //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quo nam ipsa odio, deleniti quae officia tempora quasi dolorum debitis. Officia dolore adipisci commodi nostrum dolores iste sint unde enim?'
    // }, {
    //     title: 'Titulo 2',
    //     date: `Publicado el dia ${moment().date()} de ${moment().format('MMMM')} del ${moment().format('YYYY')}`,
    //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quo nam ipsa odio, deleniti quae officia tempora quasi dolorum debitis. Officia dolore adipisci commodi nostrum dolores iste sint unde enim?'
    // }, {
    //     title: 'Titulo 3',
    //     date: `Publicado el dia ${moment().date()} de ${moment().format('MMMM')} del ${moment().format('YYYY')}`,
    //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quo nam ipsa odio, deleniti quae officia tempora quasi dolorum debitis. Officia dolore adipisci commodi nostrum dolores iste sint unde enim?'
    // }];

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

    // localStorage.removeItem("formUser");



    // posts.forEach(post => {
    //     var plantillaHtmlForPost = `
    //     <article class="post">
    //         <h2>${post.title}</h2>
    //         <span class="date">${post.date}</span>
    //         <p>${post.content}</p>
    //         <a href="#" class="button-more">Leer más</a>
    //     </article>
    //     `;
    //     divforPosts.append(plantillaHtmlForPost);
    // });
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