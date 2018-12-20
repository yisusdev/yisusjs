/**
 * @description Gives a constant value
 * @param v Value to give
 * @private
 */
const _constant = v => () => v;

module.exports = function constant() {
  if (arguments.length === 0) {
    throw new Error('constant needs one value.');
  }
  return _constant.apply(this, arguments);
};