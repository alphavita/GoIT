'use strict';
/*function GoogleCallback(queryObj, data) {}*/
function getPage(startNumberArticle) {
        $.ajax({
            url: "https://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=" +
                                        $('input[name="search-text"]', this).val() + '&start=' + startNumberArticle + '&rsz=8',
            dataType: 'jsonp',
            method : 'GET',
            success: function (data) {
                if (data.responseStatus == 400) {
                    alert('Google против таких объемов поиска, платите копеечку, - тогда, возможно, Вам разрешат');
                    return true;
                }
                
                if (data.responseStatus != 200) {
                    alert('Ошибка поиска с кодом: '+ data.responseStatus + ' '+data.responseDetails );
                    return false;
                }
                if (data.responseData.results.length == 0) {
                    alert('Ничего не найдено');
                    return true;
                }
                $('.result-container__data div').remove();
                $('.result-container__cursor div').remove();
                var htmlData = tmpl('googleTemplateData', data.responseData);
                //                $(htmlData).insertBefore('.result-container__data');
                $('.result-container__data').append(htmlData);
                var htmlCursor = tmpl('googleTemplateCursor', data.responseData.cursor);
                //                $(htmlData).insertBefore('.result-container__cursor');
                $('.result-container__cursor').append(htmlCursor);
                var $cursor = data.responseData.cursor;
            }, 
            error: function (xhr, textStatus, errorThrown) {
                alert('Ошибка с кодом '+errorThrown);
            }
        });

}
$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        var searchText = $('input[name="search-text"]', this).val();
        if (searchText.length == 0) {
            alert('Введите что-нибудь для поиска');
            return this;
        }
        getPage(0);
    });
});
