module.exports = function (collection, truthTest, context) {
    if (typeof collection.getEnumerator === 'function') {
        var index = 0;
        var current = null;
        var enumerator = collection.getEnumerator();

        while (enumerator.moveNext()) {
            current = enumerator.get_current();

            if (truthTest.call(context, current, index, collection)) {
                return current;
            }

            index++;
        }
    }

    return null;
}
