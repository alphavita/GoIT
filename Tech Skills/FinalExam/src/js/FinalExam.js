$(function () {
    initTemplates();
    populateCarousels();
    initAutorization();
    populatePartners();
    if (isIE8() || isIE9()) 
        initMasonry(window, jQuery);
    initSearchPictures();
});












