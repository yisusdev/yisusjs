/**
 * @description Filter by one where condition
 * @param w Where condition function
 * @returns {Function} filter promise
 */
const _filterP = w => a => Promise.resolve(a.filter(w));

module.exports = function filterP() {
  if (arguments.length === 0) {
    throw new Error('filterP needs one o more arguments.')
  }
  return _filterP.apply(this, arguments);
};