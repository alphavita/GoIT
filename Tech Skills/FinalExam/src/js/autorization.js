function initAutorization() {
    $('.promo__login,.promo__signup').on('click', function () {
        $('.promo__login,.promo__signup').toggleClass('promo__active');
    })
    $('.promo__signup').addClass('promo__active');
}