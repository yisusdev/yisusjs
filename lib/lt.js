/**
 * @description Returns if one value is less than criteria
 * @param c Criteria to eval
 * @returns {function} lessThan function
 */
const _lt = c => v => v < c;

module.exports = function lt() {
  if (arguments.length === 0) {
    throw new Error('lt needs one value');
  }
  return _lt.apply(this, arguments);
};