$(function () {

    /*  Часть 1 код мой, оформление по мотивам https://webdesigntutsplus.s3.amazonaws.com/tuts/178_dynamicClassAssign/example/index.html  */

    $('.tabs__tab').on('click', function () {
        $('.selected-tab').removeClass('selected-tab');                 // может быть 0 или 1 вкладка активна
        $('.selected-pane').removeClass('selected-pane'); 
        $(this).addClass('selected-tab');
        $('.tabs__tab').each(function (i, tabElement) {                  // ищем какая вкладка активна
            if (tabElement.classList.contains('selected-tab')) {        // и визуализируем соответствующий абзац текста
                $('.pane').eq(i).addClass('selected-pane');
            }
        });
    });

    /* инициализация: активируем 1-ую слева закладку */   
    $('.tabs__tab').eq(0).addClass('selected-tab');
    $('.pane').eq(0).addClass('selected-pane');




/*        Часть 2       тут только кнопку красивую содрал и подшаманил, остальное сам     */

    $('.show-all').on('click', function () {
        var $buttonText = $('.show-all')[0].innerHTML;
        if ($buttonText.indexOf('Show') >= 0) {
            $('.questionnaire__tooltip').show(500);
            $('.show-all')[0].innerHTML = $buttonText.replace('Show', 'Hide');
        }
        else {
            $('.questionnaire__tooltip').hide(500);
            $('.show-all')[0].innerHTML = $buttonText.replace('Hide', 'Show');
        }
    });
    $('.questionnaire__control').on('focus', function () {
        $('.questionnaire__tooltip').hide();
        $('.show-all')[0].innerHTML = $('.show-all')[0].innerHTML.replace('Hide', 'Show'); // если было Show оно и останется
                    
    })
});