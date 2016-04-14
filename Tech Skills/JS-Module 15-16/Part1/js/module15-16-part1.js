'use strict';
/*function GoogleCallback(queryObj, data) {}*/

$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        var startNumberArticle = 1;
        var searchText = $('input[name="search-text"]', this).val();
        if (searchText.length == 0) {
            alert('Введите что-нибудь для поиска');
            return this;
        }
        $.ajax({
            url: "https://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=" + searchText+
                        '&start='+startNumberArticle+'&rsz=large',
            dataType: 'jsonp',
            method : 'GET',
            success: function (data) {
                $('.result-container div').remove();
                if (data.responseStatus != 200) {
                    alert('Ошибка поиска с кодом: ',data.responseStatus);
                    return false;
                }
                if (data.responseData.results.length == 0) {
                    alert('Ничего не найдено');
                    return false;
                }
                var htmlData = tmpl('googleTemplate', data);       
                $(htmlData).insertBefore('.result-container #googleTemplate');
            }, 
            error: function (xhr, textStatus, errorThrown) {
                alert('Ошибка с кодом '+errorThrown);
            }
        });
    });
});
