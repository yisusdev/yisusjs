/**
 * @description Recurse over a collection
 * @param fn Function callback to apply in each recursion
 * @private
 */
const _forOf = fn => a => {
  if (!(a instanceof Array)) {
    throw new Error('forOf only works with arrays.');
  }
  if (a.length === 1) {
    fn(a[0]);
  } else {
    fn(a[0]);
    _forOf(fn)(a.slice(1));
  }
};

module.exports = function forOf() {
  if (arguments.length === 0) {
    throw new Error('forOf needs a function callback.');
  }
  return _forOf.apply(this, arguments);
};