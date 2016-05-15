var obj21_22 = {
    getQuestions: function (key) {
        // читаем из localStorage объект с вопросами и ответами
        let str = localStorage.getItem(key);
        // если объекта нет, имитируем запрос к серверу и сохраняем объект в localStorage
        if ($.isEmptyObject(str)) {
            str = imitateQuestions();
            localStorage.setItem(key, str);
        }
        return str;
    },
    isTrueAnswers: function () {
        for(var ans of $('.answer__checkbox')) {
            if ($(ans).prop('checked') != ($(ans).attr('is-true') == 'true')) {
                return false;               // дальше можно не искать
            }
        }
        return true;
    },
    clearCheckBoxes: function () {
        $('.answer__checkbox').each(function () {                                 // очищаем галочки в чекбоксах
            $(this).prop('checked', false);
        });
    },
    imitateQuestions: function () {               // метод формирует JSON-строку, имитируя приход этой строки с сервера
        var trueQuestions = [[3], [1, 3], [1, 2]];          // массив номеров правильных ответов
        var strJSON = '{"questions": [';
        var separatorQuestion = '';
        for (var i = 0; i < trueQuestions.length; i++) {
            let strQuestion = separatorQuestion + ' {"question" : "Вопрос ' + (i + 1).toString() + '", "answers": [';
            let separatorAnswer = '';
            for (var j = 0; j < 3; j++) {
                let isTrueAnswer = trueQuestions[i].indexOf(j + 1) >= 0;
                let strAnswer = separatorAnswer + '{ "answer": "Вариант ответа ' + (j + 1).toString() + '", "isTrue" : "' +
                    isTrueAnswer.toString() + '"}';
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
}
try{
    module.exports = obj21_22;
}
catch(e){}