var timerObj = {
    _timer : null,
    _currentMsecValue: 0,
    _isTimerWorking : false,
    _displayTime: function () {
        document.getElementsByClassName('time-value')[0].innerHTML = 'sdasdads';
        document.getElementsByClassName('msec')[0].innerHTML = (this._currentMsecValue % 1000) + '';
    },
    setTimeValue : function(msec){
        this._currentMsecValue=msec;
        this._displayTime();
    },
    getFlagWorking: function () {
        return this._isTimerWorking;
    },
    setFlagWorking: function (isWork) {
        this._isTimerWorking = isWork;
    },
    reverseFlagWorking: function () {
        this._isTimerWorking = !this._isTimerWorking;
    },
    incrementTime : function() {
        this._currentMsecValue++;
        this._displayTime();
    },
    startTimer: function () {
        this._timer = setInterval(this.incrementTime, 1);
        document.getElementsByClassName('btn')[0].innerHTML = 'Pause';
    },
    suspendTimer: function () {

    },
    resumeTimer: function () {

    },
    clearTimer : function () {
        this.setTimeValue(0);
        this.setFlagWorking(false);
    },
    initTimer : function () {
        this.setTimeValue(0);
        this.setFlagWorking(false);
        document.getElementsByClassName('btn')[0].addEventListener('click', this.startTimer);
        document.getElementsByClassName('btn')[1].addEventListener('click', this.clearTimer);
    }
}
timerObj.initTimer();
