/**
 * @description Gives a slices of an array
 * @param a Array to slice
 * @private
 */
const _dropout = a => (n = 1) => a.slice(n);

module.exports = function dropout() {
  if (arguments.length === 0) {
    throw new Error('dropout needs an array to works');
  }
  return _dropout.apply(this, arguments);
};