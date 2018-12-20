/**
 * @description Returns if one value is less or equal than criteria
 * @param c Criteria to eval
 * @returns {function} lessThan function
 */
const _lte = c => v => v <= c;

module.exports = function lte() {
  if (arguments.length === 0) {
    throw new Error('lte needs one value');
  }
  return _lte.apply(this, arguments);
};