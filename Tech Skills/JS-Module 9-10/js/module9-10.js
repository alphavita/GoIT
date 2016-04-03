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
    $(".jq-niceCheck").on('mousedown', function () {
        /* при клике на чекбоксе меняем его вид и значение */
        if ($(this).hasClass('jq-niceCheckDisabled'))
            return;
        if ($(this).hasClass('jq-niceChecked')) {
            $(this).removeClass('jq-niceChecked');
        } else {
            $(this).addClass('jq-niceChecked');
        }
    });
    $(".jq-niceCheck").each(function () {
        input = $(this).find("input").eq(0);
        if (input.attr("checked")) {
            $(this).addClass('jq-niceChecked');
        }
        if (input.attr("disabled")) {
            $(this).addClass('jq-niceCheckDisabled');
        }
        $(this).text('      ' + $(this).text());
    });
    /*****************    end  chkBox          *********************/

    /*****************    begin  menu          *********************/
    initMainMenu();     // расставляем классы элементам меню


    /* обработчики событий */
    $('.menu__menuitem').on('mouseover', function () {
        $(this).children('a').eq(0).css('color', 'black');
    });
    $('.menu__menuitem').on('mouseout', function () {
        $(this).children('a').eq(0).css('color', '');
    });
    $('.menuitem__dropdown--main').on('mouseenter', function () {
        $('.menu__menuitem--sub a', this).css('white-space', 'pre');
        if($('ul:first', this).is(':hidden'))
            $('ul:first', this).css({/* visibility: "visible", display: "block"*/ }).stop(true, true).slideDown(1000/*, stopAnimation*/);
    });
    $('.menuitem__dropdown--sub').on('mouseenter', function () {
        $('.menu__menuitem--sub a', this).css('white-space', 'pre');
        if ($('ul:first', this).is(':hidden'))
            $('ul:first', this).css({/* visibility: "visible", display: "block",*/ left: $('a', this).innerWidth() + 6, top: 0 }).stop(true, true).slideDown(1000/*, stopAnimation*/);
/*        $(this).children('ul').eq(0).offset({ top: $(this).offset().top, left: $(this).offset().left + $(this).outerWidth() })
                .stop(true, true).animate({ "opacity": 1 }, 1000);*/
    });
    $('.menu__menuitem').on('mouseleave', function () {
        if ($(this).hasClass('menuitem__dropdown') && !$('ul:first', this).is(':hidden'))
            $('ul:first', this).stop(true, true).slideUp(1000, function () {
                $('ul:first', this).css({ /*visibility: "hidden", display: "block",*/ left: 0, whiteSpace: "normal" });
            });
    });


    /* инициализация меню */
    function initMainMenu() {
        $('.horizontal-menu ul').eq(0).addClass('main-menu');
        $('.main-menu').children().each(function () {
            if ($(this).is('li')) {
                $(this).addClass('menu__menuitem menu__menuitem--main');
                initSubMenu($(this));   //  рекурсивно обрабатываем вложенные меню, если они есть
            }
        });
    }
    function initSubMenu(elementLi){
        if(elementLi.children('ul').length>0) {
            elementLi.addClass('menuitem__dropdown');
            if (elementLi.hasClass('menu__menuitem--main')){
                elementLi.addClass('menuitem__dropdown--main');
                $('a:first', elementLi).eq(0).text($('a:first', elementLi).eq(0).text() + '▾' /*'&#9662'*/);    // чтобы треугольник рисовался вниз
            }
            else {
                elementLi.addClass('menuitem__dropdown--sub');
                $('a:first', elementLi).eq(0).text($('a:first', elementLi).eq(0).text() + '         ▸'/*'&#9656'*/);    // чтобы треугольник рисовался вправо
            }

            elementLi.children('ul').eq(0).addClass('sub-menu').css({ /*visibility: "hidden",*/ display: "none" })
                                    .children('li').each(function () {
                                                                $(this).addClass('menu__menuitem menu__menuitem--sub');
                                                                initSubMenu($(this));
                                                         });
        }
    }
    /*****************    end  menu          *********************/

 });
