/**
 * @description Returns if one value is greater or equal than criteria
 * @param c Criteria to eval
 * @returns {function} greaterThan function
 */
const _gte = c => v => v >= c;

module.exports = function gte() {
  if (arguments.length === 0) {
    throw new Error('gt needs one value');
  }
  return _gte.apply(this, arguments);
};