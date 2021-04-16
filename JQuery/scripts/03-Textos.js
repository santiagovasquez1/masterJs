$(function() {

    var inputElement = $("#addUrl")
    var menu = $("#menu");

    $("#btnAdd").on("click", function() {
        if (inputElement.val() != "") {
            menu.prepend(`<li><a href="${inputElement.val()}"></a></li>`)
            inputElement.val("");
            reloadLink();
        }
    });

    //Motodo para recorrer elementos de html

    reloadLink();

});

function reloadLink() {
    $('a').each(function(index) {
        var url = ($(this).attr("href"));
        var a = $(this);
        //atr tambien sirve para gregar atributos al elemento htlm
        a.attr('target', 'blanl');
        a.text(url);
    });
}