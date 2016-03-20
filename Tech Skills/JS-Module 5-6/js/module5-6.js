var timerObj = {
    _timer : null,
    _currentMsecValue: 0,
    _isTimerWorking : false,
    _displayTime: function () {
        document.getElementsByClassName('time-value')[0].innerHTML = 'sdasdads';
        document.getElementsByClassName('msec')[0].innerHTML = (_currentMsecValue % 1000) + '';
    },
    _btnStart : document.getElementsByClassName('btn')[0],
    _btnClear : document.getElementsByClassName('btn')[1],
    setTimeValue : function(msec){
        _currentMsecValue=msec;
        _displayTime();
    },
    getFlagWorking: function () {
        return _isTimerWorking;
    },
    setFlagWorking: function (isWork) {
        _isTimerWorking = isWork;
    },
    reverseFlagWorking: function () {
        _isTimerWorking = !_isTimerWorking;
    },
    incrementTime : function() {
        _currentMsecValue++;
        _displayTime();
    },
    startTimer: function () {
        _timer = setInterval(incrementTime, 1);
        _btnStart.innerHTML = 'Pause';
    },
    suspendTimer: function () {

    },
    resumeTimer: function () {

    },
    clearTimer : function () {
        this.setTimeValue(0);
        setFlagWorking(false);
    },
    initTimer : function () {
        this.setTimeValue(0);
        setFlagWorking(false);
        this.btnStart.addEventListener('click', startTimer);
        this.btnClear.addEventListener('click', clearTimer);
    }
}
timerObj.initTimer();
