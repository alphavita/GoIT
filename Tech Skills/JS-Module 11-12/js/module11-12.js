$(function () {
    var xmlDoc = getXmlImages();                            // имитируем приход xml-документа
    var imageArray=parseXmlImages(xmlDoc);                  // парсим xml для подсовывания массива картинок плагину с шаблонизатором
    var options = {
        slideArray: imageArray,     // массив объектов {path : путь к картинке, description : подпись под картинкой} 
        visualListLength: 4,        // к-во одновременно видимых слайдов
        slideClick : function(numSlide) {       // callback-функция при нажатии на картинку
                        alert('Нажат слайд '+numSlide);    
                     }
    };
    $('#container-gav-carousel').gavCarousel(options);


    function getXmlImages() {
        var xmlDoc = $($.parseXML('<?xml version="1.0" encoding="windows-1251" ?> <pictures/>'));
        for (var i = 1; i <= 12; i++) {   // наполняем xml-документ "кадбудто" он пришел с сервера
            $('<picture path="img/img'+i+'.jpg" description="Картинка '+i+'"/>').appendTo(xmlDoc.find('pictures').eq(0));
        }
        return xmlDoc;
    }
    function parseXmlImages(xmlDoc) {
        var imageArr = [];          // сделаем массив картинок из xml-документа
        var pictureArray = $('picture', xmlDoc);
        for (var i = 0; i < pictureArray.length; i++)
        {
            imageArr.push({
                path: $(pictureArray[i]).attr('path'),
                description: $(pictureArray[i]).attr('description')
            });
        }
        return imageArr;
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

    leftUIEl.click();

    rightUIEl.click();*/

/*****************       plugin jcarousel          *********************/





