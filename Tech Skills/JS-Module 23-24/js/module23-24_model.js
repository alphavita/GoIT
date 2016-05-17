define(
    'module23-24_model',
    ['lodash'],
    function () {
        var listData = [];

        return {
            addItem: function (newName) {
                listData.push({
                    guid: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { 
                        var r = Math.random() * 16 | 0, v = (c == 'x' ? r : r & 0x3 | 0x8);
                        return v.toString(16); 
                    }),
                    name: newName,
                });
                return listData;
            },
            removeItem: function (guidDeleted) {
                var index = _.findIndex(listData, function (o) { return o.guid == guidDeleted; });
                if (index < 0)
                    return;
                listData.splice(index, 1);
                return listData;
            },
            editItem: function (guidEdited, newName) {
                var index = _.findIndex(listData, function (o) { return o.guid == guidEdited; });
                if (index < 0)
                    return;
                listData[index].name=newName;
                return listData;
            },
            getValue: function (guid) {
                var index = _.findIndex(listData, function (o) { return o.guid == guid; });
                if (index < 0)
                    return;
                return listData[index].name;
            },
            getItemsList: function () {
                return listData;
            }
        };
    }
);
