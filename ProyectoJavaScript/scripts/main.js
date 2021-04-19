'use strict'

$(function() {

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: false
    });

    var posts = [{
        title: 'Titulo 1',
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quo nam ipsa odio, deleniti quae officia tempora quasi dolorum debitis. Officia dolore adipisci commodi nostrum dolores iste sint unde enim?'
    }, {
        title: 'Titulo 2',
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quo nam ipsa odio, deleniti quae officia tempora quasi dolorum debitis. Officia dolore adipisci commodi nostrum dolores iste sint unde enim?'
    }, {
        title: 'Titulo 3',
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quo nam ipsa odio, deleniti quae officia tempora quasi dolorum debitis. Officia dolore adipisci commodi nostrum dolores iste sint unde enim?'
    }];
});