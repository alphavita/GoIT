function gavCarousel(startNumber, scrollCount, visibleCount, objParamSelectors) {
    // значения селекторов по умолчанию 
    var defaultSelectors = {
        carouselSelector:               '.jCarousel',
        listSelector:                   '.jCarousel__list',
        itemSelector:                   '.jCarousel__item',
        btnPrevSelector:                '.jCarousel__prev',
        btnNextSelector:                '.jCarousel__next',
        paginatorItemSelector:          '.jCarousel__paginator-item',
        paginatorItemActiveSelector:    '.jCarousel__paginator-item--active'
    }

    this.objSelectors =$.extend({}, defaultSelectors, objParamSelectors);
    this._currentItem = 0;
    this.ScrollTo = function (paginatorNumber) {
        if (this.objSelectors.paginatorItemSelector == null || this.objSelectors.paginatorItemSelector.length == 0)
            return;
        $(this.objSelectors.paginatorItemActiveSelector).removeClass(this.objSelectors.paginatorItemActiveSelector.substring(1));   // гасим активность старого активного li
        this._currentItem = paginatorNumber;                             // запоминаем номер нового активного
        $(this.objSelectors.paginatorItemSelector).eq(paginatorNumber).addClass(this.objSelectors.paginatorItemActiveSelector.substring(1));                                // новым активным делаем нажатый
        $(this.objSelectors.carouselSelector).jcarousel('scroll', this._currentItem, true);                   // скроллируем карусель до номера нажатого элемента
    }
    this.ScrollOffset = function (scrollCount) {
        this._currentItem += scrollCount;
        if (this.objSelectors.paginatorItemSelector == null || this.objSelectors.paginatorItemSelector.length == 0)
            $(this.objSelectors.carouselSelector).jcarousel('scroll', (scrollCount<0 ? '-=1' : '+=1'), true);
        else {
            if (this._currentItem < 0)
                this._currentItem = $(this.objSelectors.paginatorItemSelector).length - 1;
            if (this._currentItem > $(this.objSelectors.paginatorItemSelector).length - 1)
                this._currentItem = 0;
            this.ScrollTo(this._currentItem);
        }
    }


    $(this.objSelectors.carouselSelector).jcarousel({
        list: this.objSelectors.listSelector,
        items: this.objSelectors.itemSelector,
        start: startNumber,
        scroll: scrollCount,
        visible: visibleCount,
        /*        animation: 1500,*/
    });
    this.ScrollTo(this._currentItem);

    $(this.objSelectors.btnPrevSelector).on('click', { objCarousel: this }, function (e) {
        e.data.objCarousel.ScrollOffset(-1);
        e.preventDefault();
    });
    $(this.objSelectors.btnNextSelector).on('click', { objCarousel: this }, function (e) {
        e.data.objCarousel.ScrollOffset(1);
        e.preventDefault();
    });

    /*  реакция на клик на пагинаторе     */
    $(this.objSelectors.paginatorItemSelector).on('click', {objCarousel: this},function (e) {
        var pagnum = $(this.parentElement.children).index(this);
        e.data.objCarousel.ScrollTo(pagnum);
    });
}




