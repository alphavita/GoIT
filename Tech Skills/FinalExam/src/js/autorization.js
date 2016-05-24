function initAutorization() {
    $('.promo__login,.promo__signup').on('click', function () {
        $('.promo__login,.promo__signup').toggleClass('promo__active');
    })
    $('.promo__signup').addClass('promo__active');
}
function isIE8() {
    return navigator.appName.toLowerCase().indexOf('microsoft') >= 0 && navigator.appVersion.indexOf('MSIE 8') > 0;
}
function isIE9() {
    return navigator.appName.toLowerCase().indexOf('microsoft') >= 0 && navigator.appVersion.indexOf('MSIE 9') > 0;
}