const filter = require('./filter');

/**
 * @description Create a array of elements that not includes in other array
 * @param t Target array to filter
 * @param s Source array to compare
 * @private
 */
const _diffs = (t, s) => filter((i) => !s.includes(i))(t);

module.exports = function diffs() {
  if (arguments.length < 2) {
    throw new Error('diffs needs two arrays to compare.')
  }
  return _diffs.apply(this, arguments);
};