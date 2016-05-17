define(
    'module23-24_controller',
    ['jQuery','module23-24_model','module23-24_view'],
    function ($, model, view) {
        onAddItem = function () {
            var addedText=$('.items__input--added').val();
            if (addedText.length > 0) {
                if ($('.items__input--edited:not(.items__input--added)').length > 0) {
                    $('.items__input--edited:not(.items__input--added)').eq(0).focus().select();
                    return;         // есть не законченные edit
                }
                model.addItem(addedText);
                $('.items__input--added').val('');
                view.showData(model.getItemsList());
                addEventCallbacks();
            }
        };
        onClickDelete = function () {
            var input = $(this).prev();
            var guid = $(this).prev().attr('data-guid');
            if ($(this).hasClass('btn-cancel')) {
                $(this).removeClass('btn-cancel');
                input.val(model.getValue(guid));
                input.removeClass('items__input--edited');
                input.attr('readonly', 'readonly');
                $(this).next().next().addClass('hidden');
                $(this).next().removeClass('hidden');
            }
            else {
                if ($('.items__input--edited:not(.items__input--added)').length > 0) {
                    $('.items__input--edited:not(.items__input--added)').eq(0).focus().select();
                    return;         // есть не законченные edit
                }
                model.removeItem(guid);
                view.showData(model.getItemsList());
                addEventCallbacks();                        //  html пересоздается полностью, а не добавляется/удаляется элемент
            }
        };
        onClickEdit = function () {
            var input = $(this).prev().prev();
            input.addClass('items__input--edited');
            input.removeAttr('readonly');
            $(this).addClass('hidden');
            $(this).next().removeClass('hidden');
            $(this).prev().addClass('btn-cancel');
            input.focus().select();
       };
        onClickOK = function () {
            finishEdit($(this).prev().prev().prev());
        };
        
        onKeyEnter = function (e) {
            if (e.which == 13) {
                if ($(this).hasClass('items__input--added'))
                    onAddItem();
                else
                    finishEdit($(this));
            }
        }
        function finishEdit(input) {
            var guid = input.attr('data-guid');
            model.editItem(guid, input.val());
            input.removeClass('items__input--edited');
            input.attr('readonly', 'readonly');
            input.next().next().next().addClass('hidden');
            input.next().next().removeClass('hidden');
            input.next().removeClass('btn-cancel');
            $('.items__input--added').focus();
        }

        function addEventCallbacks() {
            $('.btn-delete').on('click', onClickDelete);
            $('.btn-edit').on('click', onClickEdit);
            $('.btn-ok').on('click', onClickOK);
            $('.items__input:not(.items__input--added)').on('keyup', onKeyEnter)
            $('.items__input--added').focus();
        }


        return {
            initCallbacks: function () {
                $('.add__button').on('click', onAddItem);
                $('.items__input--added').on('keyup',onKeyEnter)
                addEventCallbacks();
            }
        }
    }
);