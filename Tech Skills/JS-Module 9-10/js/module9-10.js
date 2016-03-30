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
   
    $(".niceCheck").each(
    /* при загрузке страницы меняем обычные на стильные checkbox */
    function() {
        changeCheckStart($(this));
    });

});


function changeCheck(el)
    /* 
        функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, котрый отвечает за новый вид)
        el - span контейнер для обычного чекбокса
        input - чекбокс
    */
{

    var el = el,
		input = el.find("input").eq(0);
		  
    if(el.attr("class").indexOf("niceCheckDisabled")==-1)
    {	
        if(!input.attr("checked")) {
            el.addClass("niceChecked");
            input.attr("checked", true);
        } else {
            el.removeClass("niceChecked");
            input.attr("checked", false).focus();
        }
    }
	
    return true;
}

function changeVisualCheck(input)
{
    /*   меняем вид чекбокса при смене значения    */
    var wrapInput = input.parent();
    if(!input.attr("checked")) {
        wrapInput.removeClass("niceChecked");
    }
    else
    {
        wrapInput.addClass("niceChecked");
    }
}

function changeCheckStart(el)
    /* 
        новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
        новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
    */
{

    try
    {
        var el = el,
            checkName = el.attr("name"),
            checkId = el.attr("id"),
            checkChecked = el.attr("checked"),
            checkDisabled = el.attr("disabled"),
            checkValue = el.attr("value");
        checkTab = el.attr("tabindex");
        if(checkChecked)
            el.after("<span class='niceCheck niceChecked'>"+
                "<input type='checkbox'"+
                "name='"+checkName+"'"+
                "id='"+checkId+"'"+
                "checked='"+checkChecked+"'"+
                "value='"+checkValue+"'"+
                "tabindex='"+checkTab+"' /></span>");
        else
            el.after("<span class='niceCheck'>"+
                "<input type='checkbox'"+
                "name='"+checkName+"'"+
                "id='"+checkId+"'"+
                "value='"+checkValue+"'"+
                "tabindex='"+checkTab+"' /></span>");
	
        /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */		
        if(checkDisabled)
        {
            el.next().addClass("niceCheckDisabled");
            el.next().find("input").eq(0).attr("disabled","disabled");
        }
	
        /* цепляем обработчики стилизированным checkbox */		
        el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
        el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
        if(jQuery.browser.msie)
        {
            el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });	
        }
        el.remove();
    }
    catch(e)
    {
        // если ошибка, ничего не делаем
    }

    return true;
}






 });
