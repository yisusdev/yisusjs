const Y = require('./index');
// Data example
const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];
const test = [{name:'bruce'}, {name:'gaby'}, [{name:'Fabs'}]];
const numbers = [1,2,3,[4,5],[6,7],8,9];
const merge = {name: 'Bruce', age: 30, child: {name:'Joker'}};
const noCurried = (a, b, c, d) => a + b + c + d;
const oMergeT = {name: 'ss', last: 'sdsdsds', user: { id: 22, username: 'sdsdss'}};
const oMergeS = {name: 'ss', last: 'sdsdsds', user: { id: 33 }};

console.log('flatMap', Y.flatMap(n => [n * 2], [1, 2, 3]));

const fnSuccess = r => console.log(r);
const fnError = e => console.log(e);
const fnSum = a => (rs, rj) => setTimeout(() => rs(a + 5), 500);
const fnMult = a => (rs, rj) => setTimeout(() => rs(a * 3), 500);
const fnCbEx = a => (rs, rj) => setTimeout(() => rj('Exception'), 600);

Y.handler(fnSum)(Y.handler(fnMult)(fnSuccess, fnError), fnError)(10);
Y.handler(fnCbEx)(fnSuccess, fnError)();


console.log(Y.frags([1,2,3,4,5])(2));

console.log(Y.dropout(2)([1, 2, 3]));

console.log(Y.diffsBy([2.1, 1.2], [2.3, 3.4])(Math.floor));

const fn1 = n => n * 2;
const fn2 = n => n + 6;
const fn3 = n => n - 2;

console.log(Y.pipe(fn1, fn2, fn3)(10));
console.log('mergeDeep', Y.mergeDeep(oMergeT, oMergeS));
console.log('keys', Y.keys(oMergeS));
Y.forOf((i) => Y.applier({surname: 'Anonymous'})(i))(items);
console.log('forOf', items);

const c = Y.constant('Bruce');
console.log(c());

const x = Y.curry(noCurried);
console.log(x(2)(6)(2)(4));

const th = Y.thunk((a, b) => a + b)(2, 3);
const th2 = Y.thunk((o, n) => Y.merge(o)(n))(merge, {child: {name: 'Robs'}});
const thv = th();
const thv2 = th2();
console.log(thv, thv2);

Y.applier({user: {username:'Kirk'}})(oMergeT);
console.log('applier', oMergeT);

const no = Y.merge(merge)({});
console.log(no.child===merge.child);

console.log(Y.flatten(test));
console.log(Y.flatten(numbers));

const prom = Y.pipeP(
  Y.filterP(Y.where({name: Y.equals('Bruce')})),
  Y.mapP(Y.applier({developer: true}))
)(items);

const p1 = (n) => new Promise(resolve => {
  setTimeout(() => resolve(n * 2), 3000);
});
const p2 = (n) => new Promise(resolve => {
  setTimeout(() => resolve(n + 1), 2000);
});
const p3 = (n) => new Promise(resolve => {
  setTimeout(() => resolve(n + 3), 1000);
});
const prom2 = Y.pipeP(
  p1,
  p2,
  p3
)(2);
Y.compose(
  Y.map(Y.applier({age: 33})),
  Y.filter(Y.where({name: Y.equals('Bruce')}))
)(items);
Y.compose(
  Y.map(Y.applier({age: 31})),
  Y.filter(Y.where({name: Y.equals('Gaby')}))
)(items);
Y.compose(
  Y.map(Y.applier({lastname: 'Roque'})),
  Y.filter(Y.where({name: Y.equals('Fabs')}))
)(items);

Y.map(x => console.log(x))(Y.filter(Y.where({ age: Y.lte(33), name: Y.equals('Gaby')}))(items));
Y.map(x => console.log(x))(Y.filter(Y.where({ age: Y.lt(33) }))(items));
Y.map(x => console.log(x))(Y.filter(Y.where({ age: Y.gt(30)}))(items));
Y.map(x => console.log(x))(Y.filter(Y.where({ age: Y.gte(31)}))(items));
prom.then(() => Y.map(x => console.log(x))(Y.filter(Y.where({ developer: Y.equals(true)}))(items)));
prom2.then(r => console.log(r));