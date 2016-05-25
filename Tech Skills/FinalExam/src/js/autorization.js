function initAutorization() {
    $('.promo__login,.promo__signup').on('click', function () {
        $('.promo__login,.promo__signup').toggleClass('promo__active');
    })
    $('.promo__signup').addClass('promo__active');
}
function isIE8() {
    return $('html.ie8').length > 0;
}
function isIE9() {
    return $('html.ie9').length > 0;
}