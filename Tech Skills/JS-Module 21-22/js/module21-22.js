'use strict';

$(function () {

    try {
        var keyQuestions = 'DZ21-22'; /* var KEY_QUESTIONS = 'DZ13-14'*/
        // читаем из localStorage объект с вопросами и ответами
        var strQuestions = localStorage.getItem(keyQuestions);
        // если объекта нет, имитируем запрос к серверу и сохраняем объект в localStorage
        if ($.isEmptyObject(strQuestions)) {
            strQuestions = getQuestions();
            localStorage.setItem(keyQuestions, strQuestions);
        }
        // парсим JSON-строку и
        var objQuestions = JSON.parse(strQuestions);
        // рендерим объект с использованием шаблонизатора tmpl
        var htmlData = tmpl('questions_template', objQuestions);
        $(htmlData).insertBefore($('.result-button'));

        // по нажатию на кнопку проверяем правильность ответов
        $('.result-button').on('click', function () {
            var $result = true;
            /*            $('.answer__checkbox').each(function () {                                 
                            if ($(this).prop('checked') != ($(this).attr('is-true') == 'true')) {
                                $result = false;
                                return false;               // дальше можно не искать
                            }*/

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = $('.answer__checkbox')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var ans = _step.value;

                    if ($(ans).prop('checked') != ($(ans).attr('is-true') == 'true')) {
                        $result = false;
                        break; // дальше можно не искать
                    }
                }
                // выдаем результат в модальном окне
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            $('.modalWindow__text')[0].innerHTML = $result ? 'Ответ правильный! Ура!!!' : 'Ответ не правильный!';
            $('.overlay').fadeIn(800, function () {
                $('.modalWindow').css('display', 'block').animate({ opacity: 1, top: '50%' }, 500);
            });
            $('.modalWindow__button').one('click', function () {
                $('.modalWindow').animate({ opacity: 0, top: '45%' }, 500, function () {
                    // пoсле aнимaции
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(800); // убираем пoдлoжку
                });
            });

            $('.answer__checkbox').each(function () {
                // очищаем галочки в чекбоксах
                $(this).prop('checked', false);
            });
        });
    } catch (e) {
        alert('Ошибка ' + e.message);
    }

    // функция формирует JSON-строку, имитируя приход этой строки с сервера
    function getQuestions() {
        var trueQuestions = [[3], [1, 3], [1, 2]]; // массив номеров правильных ответов
        var strJSON = '{"questions": [';
        var separatorQuestion = '';
        for (var i = 0; i < trueQuestions.length; i++) {
            var strQuestion = separatorQuestion + ' {"question" : "Вопрос ' + (i + 1).toString() + '", "answers": [';
            var separatorAnswer = '';
            for (var j = 0; j < 3; j++) {
                var isTrueAnswer = trueQuestions[i].indexOf(j + 1) >= 0;
                var strAnswer = separatorAnswer + '{ "answer": "Вариант ответа ' + (j + 1).toString() + '", "isTrue" : "' + isTrueAnswer.toString() + '"}';
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
