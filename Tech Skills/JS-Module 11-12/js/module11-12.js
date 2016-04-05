$(function () {
    var xmlDoc = getXmlImages();                          // имитируем приход xml-документа
    var data = parseXmlImages(xmlDoc);                    // парсим xml для подсовывания шаблонизатору
                                                          // формируем html по шаблону
                                                          // запускаем плагин и курим до нажатия на картинку

    function getXmlImages() {
        var xmlDoc = $($.parseXML('<?xml version="1.0" encoding="windows-1251" ?> <images/>'));
        for (var i = 1; i <= 12; i++) {
            $('<image path="img/img'+i+'" description="Картинка '+i+'"</image>').appendTo(xmlDoc.documentElement);
        }
        return xmlDoc;
    }

});

    



//    document.getElementById("template-parent").innerHTML = tmpl("item_tmpl"/*, dataObject*/);
/*****************    plugin  jcarousel          *********************/
/*    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = -((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function () {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left: currentLeftValue + "px" }, 500);
        }
    });

    rightUIEl.click(function () {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left: currentLeftValue + "px" }, 500);
        }
    });*/

/*****************       plugin jcarousel          *********************/





