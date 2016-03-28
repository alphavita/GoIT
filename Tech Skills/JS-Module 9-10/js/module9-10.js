$(function () {
    $('.jcarousel').jcarousel({
        list: '.jcarousel__list',
        items: '.jcarousel__item',
        start: 0,
        scroll: 1,
        visible: 1,
/*        animation: 1500,*/
        wrap: 'circular'
    });
    $('.jcarousel__prev').on('click', function () {
        if (--_currentItem < 0)                                     // Марианна, цикличность реализую сам, хотя можно
            _currentItem = $('.paginator__item').length - 1;        // сесть на событие scrollend и отслеживать текущий элемент
        $('.paginator__item').eq(_currentItem).trigger('click');     
//        $('.jcarousel').jcarousel('scroll', '-=1', true);
    });
    $('.jcarousel__next').on('click', function () {
        if (++_currentItem > $('.paginator__item').length - 1)
            _currentItem = 0;
        $('.paginator__item').eq(_currentItem).trigger('click');    // поджигаем событие нажатия на нижний соответствующий li
//        $('.jcarousel').jcarousel('scroll', '+=1', true);
    });

/*  реакция на клик на пагинаторе     */  
    $('.paginator__item').on('click', function () {
        $('.paginator__item--active').removeClass('paginator__item--active');       // гасим активность старого активного li
        $(this).addClass('paginator__item--active');                                // новым активным делаем нажатый
        _currentItem=$('.paginator__item').index(this);                             // запоминаем номер нового активного
        $('.jcarousel').jcarousel('scroll', _currentItem , true);                   // скроллируем карусель до номера нажатого элемента
    });

    var _currentItem = 0;
    $('.paginator__item:first').trigger('click');   // поджигаем событие нажатия на первую картинку из 6-ти имеющихся
});
