'use strict'

window.addEventListener('load', function() {
    /*
    ***Timers**
    setInterval, ejecuta un codigo cada x tiempo en el js
    setTimeOut, se ejecuta una vez al momento de ser invocado y añade un tiempo x, para que 
    se ejecute la funcion
    */

    timeOutExample();
    var btnStop = document.getElementById("Stop");
    var btnStart = document.getElementById("Start");
    var timer = "";

    btnStop.addEventListener('click', stopTimer);
    btnStart.addEventListener('click', startTimer);

    function intervalo() {
        let tiempo = setInterval(function() {
            console.log("Ejecutando setInterval");

            var encabezado = document.querySelector("h1")
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }
        }, 1000);

        return tiempo;
    }

    function timeOutExample() {
        setTimeout(function() {
            console.log("Invocación desde el timeOut");
            var table = document.getElementById("tableConsultingElectronicDaily");
            table.style.border = "1px solid #ccc";
        }, 5000);
    }

    function stopTimer() {
        alert("Se ha parado el intervalo");
        clearInterval(timer);
        timer = "";
    }

    function startTimer() {
        alert("Se ha iniciado el intervalo");
        if (timer == "") {
            timer = intervalo();
        }
    }

});