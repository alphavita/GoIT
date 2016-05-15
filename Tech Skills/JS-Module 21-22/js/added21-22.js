'use strict';

var obj21_22 = {
    getQuestions: function getQuestions(key) {
        // читаем из localStorage объект с вопросами и ответами
        var str = localStorage.getItem(key);
        // если объекта нет, имитируем запрос к серверу и сохраняем объект в localStorage
        if ($.isEmptyObject(str)) {
            str = imitateQuestions();
            localStorage.setItem(key, str);
        }
        return str;
    },
    isTrueAnswers: function isTrueAnswers() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = $('.answer__checkbox')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var ans = _step.value;

                if ($(ans).prop('checked') != ($(ans).attr('is-true') == 'true')) {
                    return false; // дальше можно не искать
                }
            }
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

        return true;
    },
    clearCheckBoxes: function clearCheckBoxes() {
        $('.answer__checkbox').each(function () {
            // очищаем галочки в чекбоксах
            $(this).prop('checked', false);
        });
    },
    imitateQuestions: function imitateQuestions() {
        // метод формирует JSON-строку, имитируя приход этой строки с сервера
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
};
try {
    module.exports = obj21_22;
} catch (e) {}
