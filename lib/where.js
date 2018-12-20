/**
 * @description Create a where condition function
 * @param s Specs object
 * @returns {function(object): boolean} Where condition function
 */
const _where = s => o => {
  for (const p in s) {
    if (s.hasOwnProperty(p) && !s[p](o[p])) {
      return false;
    }
  }
  return true;
};

module.exports = function where() {
  if (arguments.length === 0) {
    throw new Error('where needs one o more arguments.')
  }
  return _where.apply(this, arguments);
};