/**
 * @description Gives a slices of an array
 * @param n Array to slice
 * @private
 */
const _dropout = (n = 1) => a => a.slice(n);

module.exports = function dropout() {
  if (arguments.length === 0) {
    throw new Error('dropout needs an argument to works');
  }
  return _dropout.apply(this, arguments);
};