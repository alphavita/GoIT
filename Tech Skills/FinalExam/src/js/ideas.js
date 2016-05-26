var $grid;
function getPictures(filter, count) {
    $.ajax({
        url: 'http://api.pixplorer.co.uk/image?word=' + filter + '&amount=' + count,
        dataType: 'json',
        method: 'GET',
        success: function (data) {
            if (data.count==0) {
                alert('Ничего не найдено');
                return;
            }
            $grid.masonry('remove', $('.ideas__picture'));


            var items = tmpl('ideas__template', data);
            var re = /(<div class([\s\S]*?)\/div>)/gim;
            var found = items.match(re);
            var $items = $(found.join(''));

            if (window.innerWidth >= 768  || isIE8() ) {  /* чудеса творятся в ie8, в отладчике вижу, движок  не видит ширину окна  */ 
                if (data.count > 4) {
                    $('img', $items).eq(4).addClass('ideas__foto--width2');
                    $items.eq(4).addClass('ideas__foto--width2');
                }
                if (data.count > 5) {
                    $('img', $items).eq(5).addClass('ideas__foto--width2');
                }
            }
            if (!isIE8() && !isIE9()) {
                $grid.append($items).masonry('appended', $items);
                $grid.masonry('layout', $items);
            }
            else {
                $grid.masonry('destroy')/*.masonry('reload', $items)*/;
                $('.ideas__picture').html('');
                var optionsMasonry = {
                    itemSelector: '.ideas__picture',
                    initLayout: true,
                    gutter: 20,
                    columnWidth: 300
                };
                $grid = $('.ideas__pictures').masonry(optionsMasonry);

                $grid.append($items).masonry('appended', $items);
                $grid.masonry('layout', $items);
                if(isIE8()) {                                  //  Марианна, это признанная автором ошибка плагина в версии v3 под IE8, 
                    var x = $(optionsMasonry.itemSelector);    // но v4 под IE8 не работает совсем, а v2 совсем глюкавая
                    var el = x.eq(x.length - 1);               // и поддерживается то сейчас только v4 !!!!
                    el.css('left',parseInt(el.css('left'))*2); // поэтому подставляю костыль.
                }
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            alert('Ошибка с кодом ' + errorThrown);
        }
    });
}
function initSearchPictures() {
    $.support.cors = true;   //   !!! ie
    $('.searcher__search').on('click', function (e) {
        e.preventDefault();
        var searchText = $('input[name="search-picture"]').val();
        if (searchText.length == 0) {
            alert('Введите что-нибудь для поиска');
            return this;
        }
        getPictures(searchText, 7);
        $('input[name="search-picture"]').focus().select();
//         $(this).scrollView();
    });
    $('input[name="search-picture"]').on('keyup', function (e) {
        if (e.which == 13)            
            $('.searcher__search').trigger('click');
    });
    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    }
    var optionsMasonry = {        
        itemSelector: '.ideas__picture',
        initLayout: true,
        gutter: 10,
        columnWidth: 300
    };

    if (768 <= window.innerWidth) {
        optionsMasonry.gutter = 20;
        if (window.innerWidth < 940)
            optionsMasonry.columnWidth = 236;
    }
    $grid = $('.ideas__pictures').masonry(optionsMasonry);
    getPictures('', 7);
}