# papply

![Build status](https://api.travis-ci.org/manuelstofer/papply)

Left and right partial application without context


## Installation

[node.js](http://nodejs.org) or [component](https://github.com/component/component)

```bash
$ npm install papply
```

```bash
$ component install manuelstofer/papply
```

## Usage

```Javascript
var papply  = require('papply'),
    lpApply = papply.lpApply,
    rpApply = papply.rpApply;

function concat (a, b, c) {
    return a + ' ' + b + ' ' + c;
}

lpApply(concat, '1', '2')('3'); // -> 1 2 3
rpApply(concat, '1', '2')('3'); // -> 3 1 2
```
