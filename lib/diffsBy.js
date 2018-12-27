const map = require('./map');
const diffs = require('./diffs');
const curry = require('./curry');

/**
 * @description Create a array of elements that not includes in other array
 * @param t Target object
 * @param s Source object
 * @private
 */
const _diffsBy = (t, s) => fn => {
  const arg = map(i => fn(i))(t);
  const src = map(i => fn(i))(s);
  return map(i => t[arg.indexOf(i)])(diffs(arg, src));
};

module.exports = function diffsBy() {
  if (arguments.length === 0) {
    throw new Error('diffsBy needs one argument to compare')
  } else if (arguments.length === 1) {
    return curry(_diffsBy).apply(this, arguments);
  }
  return _diffsBy.apply(this, arguments);
};