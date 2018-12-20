<img src="https://i.ibb.co/sKcJcMn/yisus.png" width="131" height="162">

# Yisus

Yisus is a functional programming library for Node JS, developed at Sngular México.

## TOC
- [Examples](#examples)
- [Applier](#applier)
## Install
```
npm install yisus
```
## Usage
```node
const Y = require('yisus');

const arr = [1, 2, 3];
Y.map((i) => console.log(i))(arr);
```
<a id='examples'></a>
## Examples
Below show more usage examples.

### Applier
Apply a modification to an object, this returns a function that requires a target object.

See: [```Y.map()```](#map)
```node
const objTarget = {name: 'Yisus', lastname: 'Dev'};

Y.applier({surname: 'Anonymous'})(objTarget);
console.log(objTarget); // {name: 'Yisus', lastname: 'Dev', surname: 'Anonymous'}

// OR
const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];
Y.map(Y.applier({lastname: 'Anonymous'}))(items);
```

