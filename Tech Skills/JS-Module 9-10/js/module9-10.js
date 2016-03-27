$(function () {
    var instance = $('.jcarousel').data('jcarousel');
    $('.jcarousel-prev').on('click', function (event) {
        instance.scroll('-=1');
    });
    $('.jcarousel-next').on('click', function (event) {
        instance.scroll('+=1');
    });
});
/*    var instance = ;

  instance*/
 /*   $('.jcarousel ul').jcarousel({
        list: '.jcarousel ul'
    });
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });*/