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
            $grid.masonry('remove', $('.ideas__picture')).masonry('layout');
            var $items = $(tmpl('ideas__template', data));
            $grid.append($items).masonry('appended', $items).masonry('layout');
            if (window.innerWidth > 768) {
                if (data.count > 4)
                    $('.ideas__picture:nth-child(5)').addClass('ideas__pictures----width2');
                if (data.count > 5)
                    $('.ideas__picture:nth-child(6)').addClass('ideas__pictures----width2');
            }
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
    $grid = $('.ideas__pictures').masonry({
        // options
        itemSelector: '.ideas__picture',
        initLayout: true,
        gutter: 10,
        columnWidth: 300
    });
    getPictures('', 7);
}