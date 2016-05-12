$(function () {
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
});
