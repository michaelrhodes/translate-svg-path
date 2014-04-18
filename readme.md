# translate-svg-path
translate-svg-path translates the position of a [parsed SVG path](https://github.com/jkroso/parse-svg-path) against its X/Y coordinates. It was extracted from Fontello’s wonderful [svgpath](https://github.com/fontello/svgpath) toolkit.

[![Build status](https://travis-ci.org/michaelrhodes/translate-svg-path.png?branch=master)](https://travis-ci.org/michaelrhodes/translate-svg-path)

[![Browser support](https://ci.testling.com/michaelrhodes/translate-svg-path.png)](https://ci.testling.com/michaelrhodes/translate-svg-path)

## Install
```sh
$ npm install michaelrhodes/translate-svg-path
```

## API
```js
translate(path, x [,y])
```

### Example
``` js
var parse = require('parse-svg-path')
var translate = require('translate-svg-path')
var serialize = require('serialize-svg-path')

var path = parse('M10 10 L15 15')
var x = translate(path, 20)
var xy = tranlate(path, 20, 10)

serialize(x)
// => 'M30 10 L35 15'

serialize(xy)
// => 'M30 20 L35 25'
```

### License
[MIT](http://opensource.org/licenses/MIT)
