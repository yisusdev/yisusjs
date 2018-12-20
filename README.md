<img src="https://i.ibb.co/sKcJcMn/yisus.png" width="131" height="162">

# Yisus

Yisus is a functional programming library for Node JS, developed at Sngular Mexico.
<a id='toc'></a>
## TOC
- [Examples](#examples)
- [Applier](#applier)
- [Compose](#compose)
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
<a id='applier'></a>
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
[Menu](#toc)
<a id='compose'></a>
### Compose
Compose two o more functions to execute and the result of the first function is the argument to the next function.

See: [```Y.map()```](#map), [```Y.filter()```](#filter), [```Y.where()```](#where), [```Y.equals()```](#equals), [```Y.applier()```](#applier)
```node
const fn1 = n => n * 2;
const fn2 = n => n + 3;

Y.compose(
  fn1,
  fn2
)(10);

// OR
Y.compose(
  Y.map(Y.applier({age: 33})),
  Y.filter(Y.where({name: Y.equals('Bruce')}))
)(items);
```

[Menu](#toc)

