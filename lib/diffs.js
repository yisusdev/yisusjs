const filter = require('./filter');
const curry = require('./curry');

/**
 * @description Create a array of elements that not includes in other array
 * @param t Target array to filter
 * @param s Source array to compare
 * @private
 */
const _diffs = (t, s) => filter((i) => !s.includes(i))(t);

module.exports = function diffs() {
  if (arguments.length === 0) {
    throw new Error('diffs needs one argument to compare.')
  } else if (arguments.length === 1) {
    return curry(_diffs).apply(this, arguments);
  }
  return _diffs.apply(this, arguments);
};