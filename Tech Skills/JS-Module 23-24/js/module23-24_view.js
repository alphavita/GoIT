define(
    'module23-24_view',
    ['jQuery','template-Resig'/*,'module23-24_model'*/],
    function ($,tmpl/*,model*/) {
        return {
            showData: function (arrItems) {
                // рендерим список с использованием шаблонизатора tmpl
                var htmlData = tmpl('items_template', { data: arrItems });
                $('.items__list').html(htmlData);
            }
        };
    }
);