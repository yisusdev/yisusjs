/**
 * @description Returns if one value is greater than criteria
 * @param c Criteria to eval
 * @returns {function} greaterThan function
 */
const _gt = c => v => v > c;

module.exports = function gt() {
  if (arguments.length === 0) {
    throw new Error('gt needs one value');
  }
  return _gt.apply(this, arguments);
};