![](https://img.shields.io/node/v/yisus.svg)
![](https://img.shields.io/github/license/yisusdev/yisusjs.svg)

<img src="https://i.ibb.co/sKcJcMn/yisus.png" width="131" height="162">

# Yisus

Yisus is a functional programming library for Node JS, developed at [Sngular](https://sngular.com/) Mexico.
<a id='toc'></a>
## Table Of Contents
- [Install](#install)
- [Usage](#usage)
- [Examples](#examples)
- [Applier](#applier)
- [Compose](#compose)
- [Constant](#constant)
- [Curry](#curry)
- [Diffs](#diffs)
- [DiffsBy](#diffsBy)
- [Dropout](#dropout)
- [Equals](#equals)
- [Filter](#filter)
- [FilterP](#filterP)
- [FlatMap](#flatMap)
- [Flatten](#flatten)
- [ForIn](#forIn)
- [ForOf](#forOf)
- [Frags](#frags)
- [Gt](#gt)
- [Gte](#gte)
- [Handler](#handler)
- [Includes](#includes)
- [Keys](#keys)
- [Lt](#lt)
- [Lte](#lte)
- [Map](#map)
- [MapP](#mapP)
- [Merge](#merge)
- [MergeDeep](#mergeDeep)
- [Pipe](#pipe)
- [PipeP](#pipeP)
- [Thunk](#thunk)
- [Transducer](#transducer)
- [Where](#where)
- [Contributors](#contributors)
<a id='install'></a>
## Install
```
npm install yisus
```
<a id='usage'></a>
## Usage
```js
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
```js
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
```js
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
<a id='constant'></a>
### Constant
Returns a constant value in a function.
```js
const c = Y.constant('Bruce');
console.log(c());
```
[Menu](#toc)
<a id='curry'></a>
### Curry
Curry a not curried function.
```js
const noCurried = (a, b, c, d) => a + b + c + d;
const x = Y.curry(noCurried);

console.log(x(2)(6)(2)(4));
```
[Menu](#toc)
<a id='diffs'></a>
### Diffs
Create a array of elements that not includes in other array.
```js
Y.diffs([2, 4], [2, 3]); // 4
```
[Menu](#toc)
<a id='diffsBy'></a>
### DiffsBy
Create a array of elements that not includes in other array with an iterate.
 ```js
Y.diffsBy([2.1, 1.2], [2.3, 3.4])(Math.floor)); // [1.2]
 ```
[Menu](#toc)
<a id='dropout'></a>
### Dropout
Gives a slices of an array.
```js
Y.dropout(2)([1, 2, 3]);
```
[Menu](#toc)
<a id='equals'></a>
### Equals
Returns if one value is equal to criteria, this is a Setoid according [Fantasy/land Specs](https://github.com/fantasyland/fantasy-land#chain)

See: [```Y.filter()```](#filter), [```Y.where()```](#where)
```js
const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];

Y.filter(Y.where({name: Y.equals('Bruce')}))(items);
```
[Menu](#toc)
<a id='filter'></a>
### Filter
Filter by one where condition.

See: [```Y.where()```](#where), [```Y.equals()```](#equals), [```Y.compose()```](#compose), [```Y.map()```](#map)
```js
const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];

Y.filter(Y.where({name: Y.equals('Bruce')}))(items);

//OR
Y.compose(
  Y.map(Y.applier({age: 33})),
  Y.filter(Y.where({name: Y.equals('Bruce')}))
)(items);

//OR
Y.filter(x => x % 2 === 0, {a: 1, b: 2, c: 3, d: 4}); // {b: 2, d: 4}
```
[Menu](#toc)
<a id='filterP'></a>
### FilterP
Filter by one where condition envelop in a promise.

See: [```Y.pipeP()```](#pipeP), [```Y.mapP()```](#mapP), [```Y.where()```](#where), [```Y.equals()```](#equals), [```Y.applier()```](#applier)
```js
const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];
const p = Y.filterP(Y.where({name: Y.equals('Bruce')}))(items);

p.then(i => console.log(i));

//OR
const prom = Y.pipeP(
  Y.filterP(Y.where({name: Y.equals('Bruce')})),
  Y.mapP(Y.applier({developer: true}))
)(items);
```
[Menu](#toc)
<a id='flatMap'></a>
### FlatMap
Maps a function over a list, this is the chain according [Fantasy/Land Specs](https://github.com/fantasyland/fantasy-land#chain)

```js
Y.flatMap(n => [n * 2], [1, 2, 3]) // [2, 4, 6]
```
[Menu](#toc)
<a id='flatten'></a>
### Flatten
Make flat an Array.

```js
const test = [{name:'bruce'}, {name:'gaby'}, [{name:'Fabs'}]];
const numbers = [1,2,3,[4,5],[6,7],8,9];

console.log(Y.flatten(test)); // [{name:'bruce'}, {name:'gaby'}, {name:'Fabs'}];
console.log(Y.flatten(numbers)); // [1,2,3,4,5,6,7,8,9]
```
[Menu](#toc)
<a id='forIn'></a>
### ForIn
Recurse over an object, applying a function in each property.

```node
Y.forIn(p => console.log(p), {name: 'Bruce', age: 33}); // name, age
```
[Menu](#toc)
<a id='forOf'></a>
### ForOf
Recurse over a collection, don't uses loops.

See: [```Y.applier()```](#applier)
```js
const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];

Y.forOf((i) => console.log(i))(items);

//OR
Y.forOf((i) => Y.applier({surname: 'Anonymous'})(i))(items);
```
[Menu](#toc)
<a id='frags'></a>
### Frags
Gives an array with arrays fragmented.

```js
Y.frags([1, 2, 3, 4])(2); // [[1, 2], [3, 4]]
```
[Menu](#toc)
<a id='gt'></a>
### Gt
Returns if one value is greater than criteria.

See: [```Y.filter()```](#filter), [```Y.where()```](#where)
```js
const items = [{age: 30 }, {age: 31}, {age: 28}, {age: 22}];

Y.filter(Y.where({ age: Y.gt(30)}))(items); // [{age:31}]
```
[Menu](#toc)
<a id='gte'></a>
### Gte
Returns if one value is greater or equal than criteria.

See: [```Y.filter()```](#filter), [```Y.where()```](#where)
```js
const items = [{age: 30 }, {age: 31}, {age: 28}, {age: 22}];

Y.filter(Y.where({ age: Y.gte(30)}))(items); // [{age:30}, {age: 31}]
```
[Menu](#toc)
<a id='handler'></a>
### Handler
Create a handler a kind of promise

```js
const fnSuccess = r => console.log(r);
const fnError = e => console.log(e);
const fnSum = a => (rs, rj) => setTimeout(() => rs(a + 5), 500);
const fnMult = a => (rs, rj) => setTimeout(() => rs(a * 3), 500);

Y.handler(fnSum)(Y.handler(fnMult)(fnSuccess, fnError), fnError)(10); // 45
```
[Menu](#toc)
<a id='includes'></a>
### Includes
Gets if a predicate is in an array of objects.
```node
const addresses = [{ ip: '192.22.56.0'}, { ip: '192.18.3.3'}];
Y.includes(Y.where({ip: Y.equals('192.22.56.0')}), addresses); // true
```
[Menu](#toc)
<a id='keys'></a>
### Keys
Gets keys from an object.

```js
const obj = {name: 'Eduardo', last: 'Romero', user: { id: 33 }};
console.log('keys', Y.keys(obj)); //[ 'name', 'last', 'user' ]
```
[Menu](#toc)
<a id='lt'></a>
### Lt
Returns if one value is less than criteria.

See: [```Y.filter()```](#filter), [```Y.where()```](#where)
```js
const items = [{age: 30 }, {age: 31}, {age: 34}, {age: 33}];

Y.filter(Y.where({ age: Y.lt(33) }))(items); // [{age: 30}, {age: 31}]
```
[Menu](#toc)
<a id='lte'></a>
### Lte
Returns if one value is less or equal than criteria.

See: [```Y.filter()```](#filter), [```Y.where()```](#where), [```Y.equals()```](#equals)
```js
const items = [{name: 'Bruce', age: 32}, {name: 'Fabs', age: 25}, {name: 'Gaby', age: 33}];
Y.filter(Y.where({ age: Y.lte(33), name: Y.equals('Gaby')}))(items) //[{name: 'Gaby', age: 33}]
```
[Menu](#toc)
<a id='map'></a>
### Map
Create a map function for iterate over collections

See: [```Y.compose()```](#compose), [```Y.filter()```](#filter), [```Y.where()```](#where), [```Y.equals()```](#equals), [```Y.applier()```](#applier)
```js
const items = [1, 2, 3];

Y.map(x => console.log(x))(items); // 1, 2, 3

//OR
const persons = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];

Y.compose(
  Y.map(Y.applier({age: 33})),
  Y.filter(Y.where({name: Y.equals('Bruce')}))
)(persons);

//OR
Y.map(x => x + 1, {a: 1, b: 2, c: 3, d: 4}); // { a: 2, b: 3, c: 4, d: 5 }
```
[Menu](#toc)
<a id='mapP'></a>
### MapP
Create a map function for iterate over collections envelop in a promise.

See: [```Y.pipeP()```](#pipeP), [```Y.filterP()```](#filterP), [```Y.applier()```](#applier), [```Y.where()```](#where)
```js
const items = [{name: 'Bruce'}, {name: 'Fabs'}];
const p = Y.mapP(Y.applier({developer: true}))(items);

p.then(r => console.log(items)); // [{name: 'Bruce', developer: true}, {name: 'Fabs', developer: true}]

//OR
const prom = Y.pipeP(
  Y.filterP(Y.where({name: Y.equals('Bruce')})),
  Y.mapP(Y.applier({developer: true}))
)(items);

prom.then(r => console.log(items)); // [{name: 'Bruce', developer: true}, {name: 'Fabs'}]
```
[Menu](#toc)
<a id='merge'></a>
### Merge
Merge two objects in a new object.

```js
const obj = {name: 'Bruce', age: 30, child: {name:'Joker'}};
const no = Y.merge(obj)({});
console.log(no.child===obj.child);
```
[Menu](#toc)
<a id='mergeDeep'></a>
### MergeDeep
Merge two object deeply in a new object.

```js
const oMergeT = {name: 'Bruce', last: 'Dick', user: { id: 22, username: 'xxx'}};
const oMergeS = {name: 'Bruce', last: 'Dick', user: { id: 33 }};

console.log('mergeDeep', Y.mergeDeep(oMergeT, oMergeS));

/*mergeDeep { name: 'Bruce',
    last: 'Dick',
    user: { id: 33, username: 'xxx' } }*/
```
[Menu](#toc)
<a id='pipe'></a>
### pipe
Create a pipeline for functions.

```js
const fn1 = n => n * 2;
const fn2 = n => n + 6;
const fn3 = n => n - 2;

console.log(Y.pipe(fn1, fn2, fn3)(10));
```
[Menu](#toc)
<a id='pipeP'></a>
### pipeP
Create a pipe for promises.

See: [```Y.filterP()```](#filterP), [```Y.mapP()```](#mapP), [```Y.where()```](#where), [```Y.applier()```](#applier), [```Y.equals()```](#equals)
```js
const p1 = (n) => new Promise(resolve => {
  setTimeout(() => resolve(n * 2), 3000);
});
const p2 = (n) => new Promise(resolve => {
  setTimeout(() => resolve(n + 1), 2000);
});
const p3 = (n) => new Promise(resolve => {
  setTimeout(() => resolve(n + 3), 1000);
});
const pip = Y.pipeP(
  p1,
  p2,
  p3
)(2);

pip.then(r => console.log(r)); // 8

//OR
const prom = Y.pipeP(
  Y.filterP(Y.where({name: Y.equals('Bruce')})),
  Y.mapP(Y.applier({developer: true}))
)(items);
```
[Menu](#toc)
<a id='thunk'></a>
### Thunk
Create a new thunk

```js
const th = Y.thunk((a, b) => a + b)(2, 3);

console.log(th()); // 5
```
[Menu](#toc)
<a id='transducer'></a>
### Transducer
Create a transducer using a compose functions.

Transducers are composable and efficient data transformation functions which doesn’t create intermediate collections.

```node
const xform = Y.compose(
  Y.map(x => x + 1),
  Y.filter(x => x % 2 === 0)
);

Y.transducer(xform, (xs, x) => {
  xs.push(x);
  return xs;
}, [], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// [ 2, 4, 6, 8, 10 ]
```
[Menu](#toc)
<a id='where'></a>
### Where
Create a where condition function.

See: [```Y.filter()```](#filter), [```Y.where()```](#where), [```Y.equals()```](#equals)
```js
Y.filter(Y.where({name: Y.equals('Bruce')}))(items);
```
[Menu](#toc)
<a id='contributors'></a>
## Contributors
- Bruce Pineda - [bpinedah](https://github.com/bpinedah)
