(function ($) {
    // значения по умолчанию 
    var defaults = {
                    listLength : 5,         // к-во видимых слайдов
                    itemWidth  : '500px',   // высота
                    itemHeight : '500px'    // и ширина каждого слайда
                   };
    // актуальные настройки
    var options;

    $.fn.gavPlugin = function (params) {
        // options в extend нужна для сохранения параметров при многократном вызове
        options = $.extend({}, defaults, options, params);

        return this;
    };
})(jQuery);