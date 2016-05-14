$(function () {

    // запускаем карусель
    var carousel = new  gavCarousel(0, 1, 1, {
                            carouselSelector: '.header__slider',
                            listSelector: '.slider__list',
                            itemSelector: '.slider__item',
                            btnPrevSelector: null,
                            btnNextSelector: null,
                            paginatorItemSelector: '.paginator__item',
                            paginatorItemActiveSelector: '.paginator__item--active'
    });
    setInterval(function () {
        carousel.ScrollOffset(1);
    }, 5000);


    // инициализируем аккордеон
    $('.panel__toggle').on('click', function () {
        if (!$(this).parent().parent().hasClass('panel__active')) {
            $('.accordion__panel').removeClass('panel__active');
            $('.panel__toggle').html('+');
            $(this).parent().parent().addClass('panel__active')
            $(this).html('-');
            var descBlocks = $('.panel__description');
            descBlocks.slideUp();
            $(this).parent().next().slideDown();
        } else {
            $(this).parent().parent().removeClass('panel__active');
            $(this).html('+');
            $(this).parent().next().slideUp();
        }
    });
    $('.panel__description').hide();
    $('.panel__active').find('.panel__description').show(); //  если в html будет одна из панелей открыта

    // заполняем линки шаблонизатором
    var contentLinks =
        {
            columns: [
                           {
                               columnName: 'SOCIALS',
                               arrayColumnLinks: [{ name: 'Facebook', href: '#' },
                                                  { name: 'Flickr', href: '#' },
                                                  { name: 'Twitter', href: '#' },
                                                  { name: 'Vimeo', href: '#' }]
                           },
                           {
                               columnName: 'LINKS',
                               arrayColumnLinks: [{ name: 'How to Write a Blog', href: '#' },
                                                  { name: 'Create a Blog in 4 Steps', href: '#' },
                                                  { name: '15 Tips to Increase Traffic', href: '#' },
                                                  { name: '20 Blog Post Ideas', href: '#' }]
                           },
                           {
                               columnName: 'BLOGROLL',
                               arrayColumnLinks: [{ name: 'Blogs Blog', href: '#' },
                                                  { name: 'Roll Up Roll Up', href: '#' },
                                                  { name: 'Blog Free', href: '#' },
                                                  { name: 'Wordpress Blog', href: '#' }]
                           },
                           {
                               columnName: 'ABOUT AS',
                               arrayColumnLinks: [{ name: 'Agriculture', href: '#' },
                                                  { name: 'Harvest', href: '#' },
                                                  { name: 'Company news', href: '#' },
                                                  { name: 'Investor relations', href: '#' }]
                           }
            ]
        };
    
    var htmlData = tmpl('footer_links', contentLinks);
    $(htmlData).insertBefore($('#footer_links'));
});











