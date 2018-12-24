/**
 * @description Gives an array with arrays fragmented.
 * @param a Array to split
 * @private
 */
const _frags = a => (n =1) => {
  if (!a.length) {
    return [];
  }
  return [a.slice(0, n)].concat(_frags(a.slice(n))(n));
};

module.exports = function frags() {
  if (arguments.length === 0) {
    throw new Error('frags needs an array to works.');
  } else if (!(arguments[0] instanceof Array)) {
    throw new Error('frags only works with Arrays.')
  }
  return _frags.apply(this, arguments);
};