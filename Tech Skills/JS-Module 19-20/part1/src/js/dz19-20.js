$(function () {

    // запускаем карусель
    var carousel = new  gavCarousel(0, 1, 1, {
                            carouselSelector: '.header__slider',
                            listSelector: '.slider__list',
                            itemSelector: '.slider__item',
                            btnPrevSelector: null,
                            btnNextSelector: null,
                            paginatorItemSelector: '.paginator__item',
                            paginatorItemActiveSelector: '.paginator__item--active'
    });
    setInterval(function () {
        carousel.ScrollOffset(1);
    }, 5000);


    // инициализируем аккордеон
    $('.panel__description').hide();
    $('.panel__active').find('.panel__description').show();
    $('.panel__toggle').on('click', function () {
        if (!$(this).parent().parent().hasClass('panel__active')) {
            $('.accordion__panel').removeClass('panel__active');
            $('.panel__toggle').html('+');
            $(this).parent().parent().addClass('panel__active')
            $(this).html('-');
            var descBlocks = $('.panel__description');
            descBlocks.slideUp();
            $(this).parent().next().slideDown();
        } else {
            $(this).parent().parent().removeClass('panel__active');
            $(this).html('+');
            $(this).parent().next().slideUp();
        }
    });

});
