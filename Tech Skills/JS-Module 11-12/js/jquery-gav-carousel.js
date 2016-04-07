(function ($) {
    var methods = {
        init: function (params) {                              // инициализация плагина
            options = $.extend({}, defaults, options, params);


            // создаем контент плагина

            var contentTemplate =
                           '<script type="text/template" id="gavCarouselTemplate">'
                         + '    <div class="gav-carousel-hider">'
                         + '       <ul class="gav-carousel-list">'
                         + '           <% for(var i=0;i<slideArray.length ;i++){  %>'
                         + '              <li class="gav-carousel-element"><img src="<%=slideArray[i].path%>"><p><%=slideArray[i].description%></p></li>'
                         + '           <% } %>'
                         + '       </ul>'
                         + '     </div>'
                         + '</script>';
            // добавляем control для скролирования влево
            $(this).append('<div class="gav-carousel-arrow-left"><span>Влево</span></div>');

            // добавляем по шаблону слайды в карусель 
            $(this).append(contentTemplate);                           // вставляем шаблон, т.к. tmpl его достает из объекта document
            var htmlData = tmpl('gavCarouselTemplate', options);       // формируем html по шаблону  (часть 2 ДЗ 11-12)
            $(this).append(htmlData);

            // добавляем control для скролирования влево
            $(this).append('<div class="gav-carousel-arrow-right"><span>Вправо</span></div>');

            $('#gavCarouselTemplate').remove();                            // мавр сделал свое дело, можно его убивать

            // стилизуем содержимое

            $conteinerWidth = $(this).innerWidth();
            $conteinerHeight = $(this).innerHeight();
            $buttonHeight = $('.gav-carousel-arrow-left').innerHeight();

            $hiderWidth = $conteinerWidth - $('.gav-carousel-arrow-left').outerWidth(true) - $('.gav-carousel-arrow-right').outerWidth(true)-1;
            $('.gav-carousel-arrow-left,.gav-carousel-arrow-right').css({
                marginTop : ($conteinerHeight-$buttonHeight)/2         // выравниваем кнопки по вертикали
            });
            $('.gav-carousel-hider').css({
                width: $hiderWidth,                                    // обрезаем ширину области для показа слайдов
                padding : '2px 0'
            });
            $('.gav-carousel-element').css({
                width: $hiderWidth / options.visualListLength         // ширина каждого слайда
            });
            $('.gav-carousel-element img').css({
                height: $conteinerHeight - 4 /* вертикальный padding */ -  // высота каждого слайда
                    $('.gav-carousel-element p').outerHeight()  // по хорошему тут надо бы выбрать максимум из всех, но смысл ДЗ не в этом
            });


            // добавляем обработчики 
            
            
            $('.gav-carousel-arrow-left').on('click', methods.scrollLeft);      //скроллирования
            $('.gav-carousel-arrow-right').on('click', methods.scrollRight);
            
            $('.gav-carousel-element').on('click', options.slideClick);                     // и выбора слайда
        },
        scrollLeft: function () {
            if (_currentLeftValue > 0) {
                _currentLeftValue += 125;
                $('.gav-carousel-list').animate({ left: _currentLeftValue + "px" }, 500);
            }
            return this
        },
        scrollRight: function () {
            if (_currentLeftValue != minimumOffset) {
                _currentLeftValue -= 125;
                elementsList.animate({ left: _currentLeftValue + "px" }, 500);
            }
        }
    };
    $.fn.gavCarousel = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.gavCarousel');
        }
        return this;
    };
    // значения по умолчанию 
    var defaults = {
        slideArray: [],                         // массив объектов {path : путь к картинке, description : подпись под картинкой} 
        visualListLength: 5,                    // к-во одновременно видимых слайдов
        slideClick : function(numSlide) {}      // callback-функция при нажатии на картинку
    };        
    // options в extend нужна для сохранения параметров при многократном вызове
    var options;

    var _currentLeftValue = 0;
    var _minimumOffset = 0;
    var _maximumOffset = 0;

})(jQuery);