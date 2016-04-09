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
    }
    catch (e) {
        alert('Ошибка ' + e.message);
    }

    // по нажатию на кнопку проверяем правильность ответов
    $('.result-button').on('click', function () {                               // Марианна, понятно, что ответ надо проверять на сервере 
        var $result = true;                                                     // и в атрибуты не пихать признак правильного ответа,
        $('.answer__checkbox').each(function(){                                 // "но для учебных целей сойдет и так" (© Олег Змиюк)
            if($(this).prop('checked') != ($(this).attr('is-true')=='true') ){     
                $result = false;                                        
                return false;               // дальше можно не искать
            }
        });
        $result ? alert('Ответ правильный! Ура!!!') : alert('Ответ не правильный!');
        $('.answer__checkbox').each(function () {                                 // очищаем галочки в чекбоксах
            $(this).prop('checked', false);
        });
    });


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
