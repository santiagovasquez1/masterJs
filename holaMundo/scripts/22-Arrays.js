var frutas = ["Pera", "Manzana", "Naranjas", "Banano", "Naranjas", "Sandias", "Maracuya"];

document.write("<h1>Listado de frutas</h1>");
document.write("<ul>");


frutas.forEach((fruta, index) => {
    document.write(`<li>${index}--${fruta}</li>`)
});

/*
Con el metodo pop, se elimina el ultimo elemento de un array
Eliminar el elemento concreto de un array, se hace a travez del metodo 
mediante el metodo splice, pasandole el indice del elemento y el numero de elementos
a borrar
Para pasar peliculas a string, se haria mediante el metodo join
*/

document.write("</ul>");

console.log(frutas.join());

document.write("<h1>Listado de ordenadas</h1>");
var frutasOrdenadas = frutas.sort((a, b) => {
    var result = (a.length < b.length) ? -1 : (a.length > b.length) ? 1 : 0;
    return result;
});

frutasOrdenadas.forEach((fruta, index) => {
    document.write(`<li>${index}--${fruta}--${fruta.length}</li>`);
});

document.write("</ul>");

//Recorrido mediante for in
for (let indice in frutas) {
    console.log(frutas[indice]);
}

//Busqueda dentro de un array

var frutaDeseada = "Pera";
var existencia = frutas.find(fruta => {
    return fruta.toLowerCase() === frutaDeseada.toLowerCase();
});

var prueba = frutas.filter(fruta => fruta.length >= 5);

console.log(prueba);
console.log(existencia);