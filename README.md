# sp-find
Looks through SharePoint object collection and returns the first one that passes a truth test.

## Installation
```
npm install sp-find --save
```

## Usage
```js
var find = require('sp-find');

var web = find(webs, function (current, index, collection) {
    return current.get_title() === 'Title';
});
```

## License
MIT.
