$(function () {
    var xmlDoc = getXmlImages();                            // имитируем приход xml-документа
    var imageArray=parseXmlImages(xmlDoc);                  // парсим xml для подсовывания массива картинок плагину с шаблонизатором
    var options = {
        slideArray: imageArray,     // массив объектов {path : путь к картинке, description : подпись под картинкой} 
        visualListLength: 4,        // к-во одновременно видимых слайдов
        slideClick : function(event) {       // callback-функция при нажатии на картинку
            alert('Нажат слайд ' + $('p', $(event.currentTarget))[0].innerText);
                     }
    };                                                      // Марианна, плагин gavCarousel назван не в честь собак
    $('#container-gav-carousel').gavCarousel(options);      // на картинках, а просто по моему фио  :-)
                                                            

     
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






