var timerObj = {
    _timer: null,
    _timerValue : 0,            // к-во мсек, которые таймер отработал от последнего старта
    _startMsecValue : 0,        // время очередного запуска ожидания таймера
    _displayTime: function () {
        var msecs = this._timerValue % 1000;
        var secs = Math.floor(this._timerValue / 1000) % 60;
        var mins = Math.floor(this._timerValue / (60 * 1000)) % 60;
        var hours = Math.floor(this._timerValue / (60 * 60 * 1000));
        document.getElementsByClassName('time-value')[0].innerHTML =
            this._numToString(hours) + ':'+
            this._numToString(mins) + ':'+
            this._numToString(secs);
        document.getElementsByClassName('msec')[0].innerHTML = msecs + '';
    },
    _numToString(numValue){
        var str=numValue.toString();
        if (str.length > 2)
            return '!!';
        if (str.length ==1 )
            return '0'+str;
        return str;
    },
    _incrementTime: function () {
        var dNow = Date.now();
        this._timerValue += dNow - this._startMsecValue;
        this._startMsecValue = dNow;
        this._displayTime();
    },
    isWorking : function () {
        return this._timer !=null;
    },
    run: function () {
        this._startMsecValue = Date.now();
        this._timer = setInterval(this._incrementTime.bind(this), 37); // Марианна, вот нравится мне число 37 миллисекунд и все тут,
    },                                                                  // это нельзя понять, это надо запомнить :-)
    stop : function() {
        if( this._timer != null) {
            clearInterval(this._timer);
            this._timer = null;
        }
    },
    clear : function () {
        this.stop();
        this._startMsecValue = 0;
        this._timerValue = 0;
        this._displayTime();
    }
}

function controlTimer(event) {
    if( timerObj.isWorking() )
    {       // нажата Pause
        timerObj.stop();
        event.target.innerHTML = 'Resume' ;
    }
    else
    {       // нажата Start или Resume
        timerObj.run();
        document.getElementsByClassName('btn')[0].innerHTML = 'Pause' ;
    }
}
function clearTimer() {
    timerObj.clear();
    document.getElementsByClassName('btn')[0].innerHTML = 'Start' ;
}

document.getElementsByClassName('btn')[0].addEventListener('click', controlTimer);
document.getElementsByClassName('btn')[1].addEventListener('click', clearTimer);
