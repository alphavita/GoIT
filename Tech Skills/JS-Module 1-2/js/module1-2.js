/* задание 1.1 - возведение в степень */
function pow()
{
    var result;
    var base = getNumberData('Укажи целое число (от -100 до 100), возводимое в степень',-100,100);
    if (base == null)
    {
        alert('Не хочешь вводить число, ну и до свидания');
        return;
    }
    var power = getNumberData('Укажи целую степень (от -5 до 5), в которую надо возвести число', -5, 5);
    if (power == null)
    {
        alert('Не хочешь вводить степень числа, ну и до свидания');
        return;
    }
    if (power < 0)
        result = 1/calculatePow(base,-power);
    else
        result = calculatePow(base, power);
    console.log('Мой результат: ', result);
    if(result != null)
    {
        var resultBrendanEich = Math.pow(base, power);
        console.log('А у Брендана: ', resultBrendanEich);
        Math.abs(result - resultBrendanEich < 0.000000001) ?
            alert('Програмерский опыт не пропьешь!') :
            alert('Позор, учиться тебе еще и учиться.....');
    }

}
/* функция ввода целого числа */
function getNumberData(textPrompt, minValue, maxValue)
{
    var currentPrompt = textPrompt;
    do
    {
        var str = prompt(currentPrompt);
        if (str == null)    
            return null;        // нажата Cancel
        var arr = str.match(/^([-]{0,1})\d+$/);    // Марианна, понимаю, что рег. выражения мы "будем учить в 8-м классе",
        if (Array.isArray(arr) && arr.length <= 2) // но с ними мне как-то сподручнее проверять корректность ввода
        {                                          // (в т.ч. и в детских задачах),т.к. не охота много кода писать 
            var result = +str;
            if (minValue <= result && result <= maxValue)
                return result;
            currentPrompt =textPrompt + ' и ПРИДЕРЖИВАЙСЯ ДИАПАЗОНА, пожалуйста';
        }
        else
            currentPrompt =textPrompt + ', а не ШО ПОПАЛО!!!!';
    } while(true);
}
/* рекурсивный расчет степени числа */
function calculatePow(base, power)
{
    if (power<0)
    {               /* сюда никогда не должны попасть */ 
        console.log('надо вызывать функцию правильно, учи, мальчик, матчасть, power=', power);
        return null; 
    }
/* Марианна, опять прошу прощения, но с рекурсией код красивее */
    else if (power == 0)    // конец рекурсии       
        return 1;
    return base*calculatePow(base, power-1);
}

/* задание 1.2 - циклы и массивы */
function names()
{
    var arr = new Array();
    for(var i=0; i<5;i++ )
    {
        var str = prompt('Введите ' + (i+1).toString() + '-ое имя');
        if (str == null || str.length == 0)
            return null;        // не хочет человек вводить, ну и не надо
        arr.push(str);
    }
    str = prompt('Введите любимое имя');
    for(var i=0; i<5;i++ )
        if ( str.toLowerCase() == arr[i].toLowerCase() )
        {
            alert(str + ', Вы успешно вошли (не знаю куда)');
            return;
        }
        alert('Ну нет такого имени, нет');
}