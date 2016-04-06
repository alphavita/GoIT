(function ($) {
    // значения по умолчанию 
    var defaults = {
                // properties
                    listLength : 5,         // к-во видимых слайдов
                    itemWidth  : '500px',   // высота
                    itemHeight : '500px',    // и ширина каждого 


                // methods
                    left   : function () {        // скроллинг влево
                        if (currentLeftValue != maximumOffset) {
                            currentLeftValue += 125;
                            elementsList.animate({ left: currentLeftValue + "px" }, 500);
                        }
                        return this
                    },
                    right  : function () {
                            if (currentLeftValue != minimumOffset) {
                                currentLeftValue -= 125;
                                elementsList.animate({ left: currentLeftValue + "px" }, 500);
                            }
                        }
                   };
    // актуальные настройки
    var options;

    $.fn.gavPlugin = function (params) {
        // options в extend нужна для сохранения параметров при многократном вызове
        options = $.extend({}, defaults, options, params);

        return this;
    };
})(jQuery);