$(function () {
/*****************    begin  jcarousel          *********************/
    $('.jcarousel').jcarousel({
        list: '.jcarousel__list',
        items: '.jcarousel__item',
        start: 0,
        scroll: 1,
        visible: 1,
/*        animation: 1500,*/
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
/*****************       end jcarousel          *********************/



/*****************    begin  SumoSelect          *********************/

    $selectObj = $(".new-sumoselect").SumoSelect({
        placeholder: 'Сделайте выбор',
        csvDispCount: 0,
        floatWidth: 500,
        forceCustomRendering: false,
        nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
        multiple: true,
        csvSepChar: ',',
        okCancelInMulti: true,
        selectAll: true,      
        triggerChangeCombined: true
    });
    $('.SumoSelect > .CaptionCont').css("background-color", "aqua");

/*****************    end  SumoSelect          *********************/

/*****************    begin  chkBox          *********************/
   
    $(".niceCheck").on('mousedown',function() {
    /* при клике на чекбоксе меняем его вид и значение */
        input = $(this).find("input").eq(0);
        if (!input.attr("checked")) {
            $(this).addClass('niceChecked');
            input.attr("checked", true)
        } else {
            $(this).removeClass('niceChecked');
            input.attr("checked", false)
        }
        return true;
    });

    $(".niceCheck").each(function() {
        input = $(this).find("input").eq(0);
        if (input.attr("checked")) {
            $(this).addClass('niceChecked');
        }
//        $(this)[0].innerText = '&nbsp;&nbsp;&nbsp;' + ($(this)[0].innerText);
        $(this).text('&nbsp;&nbsp;&nbsp;' + $(this).text());
        return true;
    });

/*****************    end  chkBox          *********************/
 });
