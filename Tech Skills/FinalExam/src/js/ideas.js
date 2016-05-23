﻿var $grid;
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
            var $items = $(tmpl('ideas__template', data));
            $grid.append($items).masonry('appended', $items);
            if (window.innerWidth >= 768) {
                if (data.count > 4)
                    $('img', $items).eq(4).addClass('ideas__foto--width2');
                if (data.count > 5)                                        
                    $('img', $items).eq(5).addClass('ideas__foto--width2');
            }
            $grid.masonry('layout');
        },
        error: function (xhr, textStatus, errorThrown) {
            alert('Ошибка с кодом ' + errorThrown);
        }
    });
}
function initSearchPictures(){
    $('.searcher__search').on('click', function (e) {
        e.preventDefault();
        var searchText = $('input[name="search-picture"]').val();
        if (searchText.length == 0) {
            alert('Введите что-нибудь для поиска');
            return this;
        }
        getPictures(searchText, 7);
        $('input[name="search-picture"]').focus().select();
        $(this).scrollView();
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