/**
 * @description Filter by one where condition
 * @param w Where condition function
 * @returns {Function} filter function
 */
const _filter = w => a => a.filter(w);

module.exports = function filter() {
  if (arguments.length === 0) {
    throw new Error('filter needs one o more arguments.')
  }
  return _filter.apply(this, arguments);
};