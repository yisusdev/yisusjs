/**
 * @description Returns if one value is equal to criteria
 * @param c Criteria to eval
 * @returns {function(string): boolean} Compose function
 */
const _equals = c => v => c === v;

module.exports = function equals() {
  if (arguments.length === 0) {
    throw new Error('equals needs one value.');
  }
  return _equals.apply(this, arguments);
};