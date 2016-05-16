requirejs.config({
    paths: {
        'jQuery': 'added-files/jquery-1.12.2.min',
        'lodash': 'added-files/lodash.min',
        'template-Resig' : 'added-files/template',
    },
    shim: {
        'jQuery': {
            exports: 'jQuery'
        },
        'lodash': {
            exports: 'lodash'
        },
        'template-Resig': {
            exports: 'tmpl'
        }
    }
});
require(
    [
        'module23-24_model',
        'module23-24_view',
        'module23-24_controller'
    ],

    function (model,view,controller) {
        model.addItem('adsfsdfsdf');
        model.addItem('adsfsdfsdf');
        model.addItem('adsfsdfsdf');
        model.removeItem('sfgdfgdfgfg');
        view.showData(model.getItemsList());
    }
);