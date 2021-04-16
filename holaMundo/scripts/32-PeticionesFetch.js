'use strict'

/*
    Acercamiento a peticiones fetch,sustituto de las peticiones ajax de js clasico, para el consumo de servicios en nuestro js
    utilizando JsonPlaceHolder, pagina con servicios fakes para hacer pruebas
    Promesas: es el encadenamiento de peticiones asincronas del fetch;
*/

window.addEventListener('load', function() {

    var divfetchPeticion = document.getElementById("fetchPeticion");
    var divSingleUser = document.getElementById("SingleUser");
    var ul = document.createElement("ul");

    var urlUsers = "https://jsonplaceholder.typicode.com/users";
    var users = [];

    //Encadenamientos de peticiones fetch
    getUsuarios(urlUsers).then(data => data.json())
        .then(usersData => {
            users = usersData;
            console.log(users);
            listadoUsuarios(users, ul, divfetchPeticion);
            return getUser(urlUsers, 1);
        }).then(singleUser => {
            return singleUser.json();
        }).then(singleUser => {
            console.log(singleUser);
            mostrarSingleUser(singleUser, divSingleUser);
        });
});

//Promesa de un fecth
function getUsuarios(url) {
    return fetch(url);
}

function getUser(url, index) {
    let urlUser = `${url}//${index}`;
    return fetch(urlUser);
}

function listadoUsuarios(users, ul, divfetchPeticion) {
    users.map(user => {
        let li = document.createElement("li");
        let nameUser = document.createElement("h3");

        nameUser.innerHTML = user.name;
        li.append(nameUser);

        let ulInfo = document.createElement("ul");

        ulInfo.innerHTML = `<li>User Name: ${user.username}</li>
                <li>User email: ${user.email}</li>`;


        ul.append(li);
        ul.append(ulInfo);
    });
    divfetchPeticion.append(ul);
}

function mostrarSingleUser(singleUser, divSingleUser) {
    let nameUser = document.createElement("h3");
    nameUser.innerHTML = singleUser.name;
    let ulInfo = document.createElement("ul");

    ulInfo.innerHTML = `<li>User Name: ${singleUser.username}</li>
    <li>User email: ${singleUser.email}</li>`;

    document.querySelector(".loading").style.display = "none";

    divSingleUser.append(nameUser);
    divSingleUser.append(ulInfo);
}