/*  Сделал по мотивам https://webdesigntutsplus.s3.amazonaws.com/tuts/178_dynamicClassAssign/example/index.html */
$(function () {
    $('.tabs__tab').on('click', function () {
        $('.selected-tab').removeClass('selected-tab');                 // может быть 0 или 1 вкладка активна
        $('.selected-pane').removeClass('selected-pane'); 
        $(this).addClass('selected-tab');
        $('.tabs__tab').each(function (i,tabElement) {                  // ищем какая вкладка активна
            if (tabElement.classList.contains('selected-tab')) {        // и визуализируем соответствующий абзац текста
                $('.pane').eq(i).addClass('selected-pane');
            }
        })
    });

 /* инициализация: активируем 1-ую слева закладку */   
    $('.tabs__tab').eq(0).addClass('selected-tab');
    $('.pane').eq(0).addClass('selected-pane');

});