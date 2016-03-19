var htmlCreator = {
    wrapper: '',
    createWrapper: function (parent) {
        wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        parent.appendChild(wrapper);
        return this;
    },
    createHeader: function (headerText) {
        var header = document.createElement('h3');
        header.innerHTML = headerText;
        header.classList.add('title');
        wrapper.appendChild(header);
        return this;
    },
    createQuestions: function (questionsText, possibleAnswersText) {
        var ol = document.createElement('ol');
        ol.classList.add('questions');
        for (var i = 0; i < questionsText.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = questionsText[i];
            li.classList.add('question');
            ol.appendChild(li);
            this.createAnswers(li, possibleAnswersText);
        }
        wrapper.appendChild(ol);
        return this;
    },
    createSubmit: function (submitText) {
        var submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', submitText);
        submit.setAttribute('onClick', 'alert("Ok")');
        submit.classList.add('result-button');
        wrapper.appendChild(submit);
        return this;
    },
    createAnswers: function (parent,possibleAnswersText) {
        var ul = document.createElement('ul');
        ul.classList.add('answers');
        for (var i = 0; i < possibleAnswersText.length; i++) {
            var li = document.createElement('li');
            li.classList.add('answer');
            var lbl = document.createElement('label');
            var chkBox = document.createElement('input');
            chkBox.setAttribute('type', 'checkbox');
            chkBox.classList.add('answer__checkbox');
            lbl.innerHTML = possibleAnswersText[i];
            lbl.insertBefore(chkBox,lbl.firstChild);
            lbl.classList.add('answer__text');
            li.appendChild(lbl);
            ul.appendChild(li);
        }
        parent.appendChild(ul);
        return this;
    }
}
var HEADER_TEXT='Тест по программированию';
var QUESTIONS_TEXT = ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'];
var POSSIBLE_ANSWERS_TEXT=['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'];
var SUBMIT_TEXT = 'Проверить мои результаты';

var elBody = document.getElementsByTagName('body')[0];

htmlCreator.createWrapper(elBody)
           .createHeader(HEADER_TEXT)
           .createQuestions(QUESTIONS_TEXT, POSSIBLE_ANSWERS_TEXT)
           .createSubmit(SUBMIT_TEXT);