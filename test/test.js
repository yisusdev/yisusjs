const assert = require('assert');
const Y = require('../index');

describe('Functionally', function () {
  describe('Applier', function () {
    it('Should apply a object modification', function () {
      const obj = { name: 'Yisus', age: 33 };
      Y.applier({ age: 30, developer: true })(obj);
      assert.equal(obj.age, 30);
      assert.equal(obj.developer, true);
    })
  });
  describe('Compose', function () {
    it('Should compose functions', function () {
      const fn1 = n => n * 2;
      const fn2 = n => n + 3;
      const result = Y.compose(
        fn1,
        fn2
      )(10);
      assert.equal(result, 26);
    })
  });
  describe('Constant', function () {
    it('Should gives a constant value', function () {
      const c = Y.constant('Yisus');
      assert.equal(c(), 'Yisus');
    })
  });
  describe('Curry', function () {
    it('Should gives a curried function', function () {
      const noCurried = (a, b, c, d) => a + b + c + d;
      const x = Y.curry(noCurried);
      assert.equal(x(2)(6)(2)(4), 14);
    })
  });
  describe('Diffs', function () {
    it('Should gives an array with difference items', function () {
      assert.equal(Y.diffs([2, 1], [2, 3]).length, 1);
    })
  });
  describe('DiffsBy', function () {
    it('Should gives an array with difference items by one iterate', function () {
      assert.equal(Y.diffsBy([2.1, 1.2], [2.3, 3.4])(Math.floor).length, 1);
    })
  });
  describe('Dropout', function () {
    it('Should gives a slice of an array', function () {
      assert.equal(Y.dropout(2)([1, 2, 3]).length, 1);
    })
  });
  describe('Equals', function () {
    it('Should eval a value with other', function () {
      const value = 'Yisus';
      const criteria = 'Bruce';
      assert.equal(Y.equals(value)(criteria), false);
    })
  });
  describe('Filter', function () {
    it('Should gives a filtered list', function () {
      const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];
      const filtered = Y.filter((i) => i.name === 'Bruce')(items);
      assert.equal(filtered.length, 2);
    })
  });
  describe('FilterP', function () {
    it('Should gives a filtered list in a promise', function (done) {
      const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];
      const p = Y.filterP(Y.where({name: Y.equals('Bruce')}))(items);
      p.then(r => {
        assert.equal(r.length, 2);
        done();
      })
    })
  });
  describe('FlatMap', function () {
    it('Should gives a flat array with functor applied', function () {
      assert.equal(Y.flatMap(n => [n * 2], [1, 2, 3])[0], 2);
    })
  });
  describe('Flatten', function () {
    it('Should gives a flat array', function () {
      const numbers = [1,2,3,[4,5],[6,7],8,9];
      const modified = Y.flatten(numbers);
      assert.equal(modified[3], 4);
    })
  });
  describe('ForOf', function () {
    it('Should Recurse over a collection', function () {
      const items = [{name: 'Bruce' }, {name: 'Fabs'}, {name: 'Bruce'}, {name: 'Gaby'}];
      Y.forOf((i) => i.surname = 'Anonymous')(items);
      assert.equal(items.filter(i => i.surname === 'Anonymous').length, 4);
    })
  });
  describe('Frags', function () {
    it('Should give an array with frags from another array', function () {
      assert.equal(Y.frags([1, 2, 3, 4])(2).length, 2);
    })
  });
  describe('Gt', function () {
    it('Should gives true if a value is Greater than other', function () {
      assert.equal(Y.gt(30)(33), true);
    })
  });
  describe('Gte', function () {
    it('Should gives true if a value is Greater or equal than other', function () {
      assert.equal(Y.gte(30)(30), true);
    })
  });
  describe('Handler', function () {
    it('Should create a handler to one function.', function (done) {
      const fnSuccess = r => {
        assert.equal(r, 45);
        done();
      };
      const fnError = e => console.log(e);
      const fnSum = a => (rs, rj) => setTimeout(() => rs(a + 5), 500);
      const fnMult = a => (rs, rj) => setTimeout(() => rs(a * 3), 500);

      Y.handler(fnSum)(Y.handler(fnMult)(fnSuccess, fnError), fnError)(10);
    })
  });
  describe('Keys', function () {
    it('Should gives a collection with keys from an object', function () {
      const obj = {name: 'Eduardo', last: 'Romero', user: { id: 33 }};
      assert.equal(Y.keys(obj).length, 3);
    })
  });
  describe('Lt', function () {
    it('Should gives true if a value is less than other', function () {
      assert.equal(Y.lt(30)(29), true);
    })
  });
  describe('Lte', function () {
    it('Should gives true if a value is less or equal than other', function () {
      assert.equal(Y.lte(30)(30), true);
    })
  });
  describe('Map', function () {
    it('Should iterate over a collection', function () {
      const items = [1, 2, 3];
      const fn = x => {
        const idx = items.indexOf(x);
        assert.equal(x, items[idx]);
      };
      Y.map(fn)(items);
    })
  });
  describe('MapP', function () {
    it('Should iterate over a collection in a promise', function (done) {
      const items = [1, 2, 3];
      const fn = x => {
        const idx = items.indexOf(x);
        assert.equal(x, items[idx]);
      };
      const p = Y.mapP(fn)(items);
      p.then(() => done());
    })
  });
  describe('Merge', function () {
    it('Should merge an object with other, returning a different object reference', function () {
      const obj = {name: 'Bruce', age: 30, child: {name:'Joker'}};
      const no = Y.merge(obj)({});
      assert.notEqual(no.child, obj.child);
    })
  });
  describe('MergeDeep', function () {
    it('Should merge an object with ohre deeply', function () {
      const oMergeT = {name: 'Bruce', last: 'Dick', user: { id: 22, username: 'xxx'}};
      const oMergeS = {name: 'Bruce', last: 'Dick', user: { id: 33 }};
      const result = Y.mergeDeep(oMergeT, oMergeS);
      assert.equal(result.user.id, 33);
      assert.equal(result.user.username, 'xxx');
    })
  });
  describe('Pipe', function () {
    it('Should generate a pipeline for functions', function () {
      const fn1 = n => n * 2;
      const fn2 = n => n + 6;
      const fn3 = n => n - 2;

      assert.equal(Y.pipe(fn1, fn2, fn3)(10), 24);
    })
  });
  describe('PipeP', function () {
    it('Should generate a pipeline for promises', function (done) {
      this.timeout(3000);
      const p1 = (n) => new Promise(resolve => {
        setTimeout(() => resolve(n * 2), 500);
      });
      const p2 = (n) => new Promise(resolve => {
        setTimeout(() => resolve(n + 1), 500);
      });
      const p3 = (n) => new Promise(resolve => {
        setTimeout(() => resolve(n + 3), 500);
      });
      const pip = Y.pipeP(
        p1,
        p2,
        p3
      )(2);
      pip.then(r => {
        assert.equal(r, 8);
        done();
      })
    })
  });
  describe('Thunk', function () {
    it('Should create a thunk', function () {
      const th = Y.thunk((a, b) => a + b)(2, 3);
      assert.equal(th(), 5);
    })
  });
  describe('Where', function () {
    it('Should gives a true if a value is equal to another in an object', function () {
      const result = Y.where({name: Y.equals('Bruce')})({name: 'Bruce'});
      assert.equal(result, true);
    })
  });
});