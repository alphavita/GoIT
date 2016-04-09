'use strict';
$(function () {
    try {
        var KEY_QUESTIONS = 'DZ13-14';
    // читаем из localStorage объект с вопросами и ответами
        var strQuestions = localStorage.getItem(KEY_QUESTIONS);
    // если объекта нет, имитируем запрос к серверу и сохраняем объект в localStorage
        if ( $.isEmptyObject(strQuestions) ) {
            strQuestions = getQuestions();
            localStorage.setItem(KEY_QUESTIONS, strQuestions);
        }
    // парсим JSON-строку и
        var objQuestions = JSON.parse(strQuestions);
    // рендерим объект с использованием шаблонизатора tmpl
        var htmlData = tmpl('questions_template', objQuestions);
        $(htmlData).insertBefore($('.result-button'));

    // по нажатию на кнопку проверяем правильность ответов
        $('.result-button').on('click', function () {                               // Марианна, понятно, что ответ надо проверять на сервере 
            var $result = true;                                                     // и в атрибуты не пихать признак правильного ответа,
            $('.answer__checkbox').each(function () {                                 // "но для учебных целей сойдет и так" (© Олег Змиюк)
                if ($(this).prop('checked') != ($(this).attr('is-true') == 'true')) {
                    $result = false;
                    return false;               // дальше можно не искать
                }
            });

    // выдаем результат в модальном окне
            $('.modalWindow__text')[0].innerHTML=$result ? 'Ответ правильный! Ура!!!' : 'Ответ не правильный!';
            $('.overlay').fadeIn(800, function () { 
                $('.modalWindow').css('display', 'block').animate({ opacity: 1, top: '50%' }, 500); 
            });
            $('.modalWindow__button').one('click',function () { 
                $('.modalWindow').animate({ opacity: 0, top: '45%' }, 500,  
                        function () { // пoсле aнимaции
                            $(this).css('display', 'none'); 
                            $('.overlay').fadeOut(800); // убираем пoдлoжку
                        }
                    );
            });



            $('.answer__checkbox').each(function () {                                 // очищаем галочки в чекбоксах
                $(this).prop('checked', false);
            });
        });
    }
    catch (e) {
        alert('Ошибка ' + e.message);
    }


    // функция формирует JSON-строку, имитируя приход этой строки с сервера
    function getQuestions() {
        var trueQuestions = [[3], [1,3], [1,2]];          // массив номеров правильных ответов
        var strJSON = '{"questions": [';
        var separatorQuestion='';
        for (var i = 0; i < trueQuestions.length; i++) {
            var strQuestion = separatorQuestion +' {"question" : "Вопрос ' + (i+1).toString() + '", "answers": [';
            var separatorAnswer = '';
            for(var j=0; j<3; j++) {
                var strAnswer = separatorAnswer + '{ "answer": "Вариант ответа ' + (j+1).toString() + '", "isTrue" : "'+
                                    (trueQuestions[i].indexOf(j+1) >= 0).toString() + '"}';
                strQuestion += strAnswer;
                separatorAnswer = ',';
            }
            strQuestion += ']}';
            strJSON += strQuestion;
            separatorQuestion = ',';
        }
        strJSON += ']}';
        return strJSON;
    }
});
