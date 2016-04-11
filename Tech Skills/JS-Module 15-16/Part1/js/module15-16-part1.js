'use strict';
function GoogleCallback(queryObj,data) {

}
$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        var searchText = $('input[name="search-text"]', this).val();
        if (searchText.length == 0) {
            alert('Введите что-нибудь для поиска');
            return this;
        }
        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=" + searchText + "&rsz=large&callback=GoogleCallback&context=?",
            datatype: 'jsonp',
            error: function (err) {
                alert('Ошибка'+err);
            }
        });
    });
});
