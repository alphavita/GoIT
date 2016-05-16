$(function () {
    try {
        const keyQuestions = 'DZ21-22';                        /* var KEY_QUESTIONS = 'DZ13-14'*/
        let strQuestions = obj21_22.getQuestions(keyQuestions);
    // парсим JSON-строку и
        let objQuestions = JSON.parse(strQuestions);
    // рендерим объект с использованием шаблонизатора tmpl
        let htmlData = tmpl('questions_template', objQuestions);
        $(htmlData).insertBefore($('.result-button'));

    // по нажатию на кнопку проверяем правильность ответов
        $('.result-button').on('click', function () {
            let $result = obj21_22.isTrueAnswers();
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

            obj21_22.clearCheckBoxes();

        });
    }
    catch (e) {
        alert('Ошибка ' + e.message);
    }
});
