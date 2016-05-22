function populateCarousels(){

    // create content of carousels
    var titleSliders = ['Sed leo enim, condimentum', 'Morbi velit risus', 'Sed leo enim, condimentum'];
    var textSliders = ['Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
        'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.',
        'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.'];
    var contentForSlidersTemplate = {
                    sliders: [{
                        images: [ 'img/sliders/foto-1.png', 'img/sliders/foto-2.png','img/sliders/foto-3.png'],
                        title: titleSliders[0], 
                        text: textSliders[0],
                        text_high_or_low: 'high'
                    },        {
                        images: [ 'img/sliders/foto-2.png', 'img/sliders/foto-3.png'],
                        title: titleSliders[1], 
                        text: textSliders[1],
                        text_high_or_low: 'low'
                    },        {
                        images: [ 'img/sliders/foto-3.png','img/sliders/foto-1.png'],
                        title: titleSliders[2], 
                        text: textSliders[2],
                        text_high_or_low: 'high'
                    }
                  ]
                };
    var htmlData = tmpl('howitworks__template',contentForSlidersTemplate );
    $(htmlData).insertBefore($('#howitworks__template'));

    // init carousels
    var carouselSelectors = {
        carouselSelector: '.howitworks__slider--number',
        listSelector: '.howitworks__list',
        itemSelector: '.howitworks__item',
        btnPrevSelector: '.howitworks__prev--number',
        btnNextSelector: '.howitworks__next--number',
        paginatorItemSelector: null /*'.paginator__item'*/,
        paginatorItemActiveSelector: null /*'.paginator__item--active'*/
    };
    var arrSliders=[];
    for (var i = 1; i <= 3; i++) {
        var obj = $.extend({},carouselSelectors);
        obj.carouselSelector = obj.carouselSelector.replace('number',i+'');
        obj.btnPrevSelector = obj.btnPrevSelector.replace('number',i+'');
        obj.btnNextSelector = obj.btnNextSelector.replace('number',i+'');
        arrSliders.push(new gavCarousel(0, 1, 1,obj))
    }
}
