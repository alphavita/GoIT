'use strict';
function GoogleCallback(queryObj,data) {
    alert('callback!!!');
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
//            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=' + /*searchText*/'test' + '&rsz=large&callback=GoogleCallback&context=?',
            datatype: 'jsonp',
            crossDomain: true, 
            beforeSend: function (xhr) {
//                xhr.setRequestHeader('Access-Control-Allow-Origin','*');
//                xhr.setRequestHeader('X-Content-Type-Options','nosniff');
//                xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Type, Content-Range, Content-Disposition, Content-Description');
//                xhr.setRequestHeader('Access-Control-Allow-Headers','origin, x-requested-with, content-type');
//                xhr.setRequestHeader('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS');
            },
            success: function(data){
                alert('все ок'+ data);
            }, 
            error: function (xhr, textStatus, errorThrown) {
                alert('Ошибка с кодом '+xhr.status);
            }
        });
    });
});
