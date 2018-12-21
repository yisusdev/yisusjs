<img src="https://i.ibb.co/sKcJcMn/yisus.png" width="131" height="162">

# Yisus

Yisus is a functional programming library for Node JS, developed at Sngular Mexico.
<a id='toc'></a>
## TOC
- [Examples](#examples)
- [Applier](#applier)
- [Compose](#compose)
- [Constant](#constant)
- [Curry](#curry)
- [Equals](#equals)
- [Filter](#filter)
- [FilterP](#filterP)
- [Flatten](#flatten)
- [ForOf](#forOf)
- [Gt](#gt)
- [Gte](#gte)
- [Keys](#keys)
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
<a id='constant'></a>
### Constant
Returns a constant value in a function.
```node
const c = Y.constant('Bruce');
console.log(c());
```
[Menu](#toc)
<a id='curry'></a>
### Curry
Curry a not curried function.
```node
const noCurried = (a, b, c, d) => a + b + c + d;
const x = Y.curry(noCurried);

console.log(x(2)(6)(2)(4));
```
[Menu](#toc)
<a id='equals'></a>
### Equals
Returns if one value is equal to criteria.

See: [```Y.filter()```](#filter), [```Y.where()```](#where)
```node
const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];

Y.filter(Y.where({name: Y.equals('Bruce')}))(items);
```
[Menu](#toc)
<a id='filter'></a>
### Filter
Filter by one where condition.

See: [```Y.where()```](#where), [```Y.equals()```](#equals), [```Y.compose()```](#compose), [```Y.map()```](#map)
```node
const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];

Y.filter(Y.where({name: Y.equals('Bruce')}))(items);

//OR
Y.compose(
  Y.map(Y.applier({age: 33})),
  Y.filter(Y.where({name: Y.equals('Bruce')}))
)(items);
```
[Menu](#toc)
<a id='filterP'></a>
### FilterP
Filter by one where condition envelop in a promise.

See: [```Y.pipeP()```](#pipeP), [```Y.mapP()```](#mapP), [```Y.where()```](#where), [```Y.equals()```](#equals), [```Y.applier()```](#applier)
```node
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
<a id='flatten'></a>
### Flatten
Make flat an Array.

```node
const test = [{name:'bruce'}, {name:'gaby'}, [{name:'Fabs'}]];
const numbers = [1,2,3,[4,5],[6,7],8,9];

console.log(Y.flatten(test)); // [{name:'bruce'}, {name:'gaby'}, {name:'Fabs'}];
console.log(Y.flatten(numbers)); // [1,2,3,4,5,6,7,8,9]
```
[Menu](#toc)
<a id='forOf'></a>
### ForOf
Recurse over a collection, don't uses loops.

See: [```Y.applier()```](#applier)
```node
const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];

Y.forOf((i) => console.log(i))(items);

//OR
Y.forOf((i) => Y.applier({surname: 'Anonymous'})(i))(items);
```
[Menu](#toc)
<a id='gt'></a>
### Gt
Returns if one value is greater than criteria.

See: [```Y.filter()```](#filter), [```Y.where()```](#where)
```node
const items = [{age: 30 }, {age: 31}, {age: 28}, {age: 22}];

Y.filter(Y.where({ age: Y.gt(30)}))(items); // [{age:31}]
```
[Menu](#toc)
<a id='gte'></a>
### Gte
Returns if one value is greater or equal than criteria.

See: [```Y.filter()```](#filter), [```Y.where()```](#where)
```node
const items = [{age: 30 }, {age: 31}, {age: 28}, {age: 22}];

Y.filter(Y.where({ age: Y.gte(30)}))(items); // [{age:30}, {age: 31}]
```
[Menu](#toc)
<a id='keys'></a>
### Keys
Gets keys from an object.

```node
const obj = {name: 'Eduardo', last: 'Romero', user: { id: 33 }};
console.log('keys', Y.keys(obj)); //[ 'name', 'last', 'user' ]
```
[Menu](#toc)