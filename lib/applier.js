const mergeDeep = require('./mergeDeep');

/**
 * @description Create a modification function
 * @param s source Object to apply
 * @returns {Function} Modification function
 */
const _applier = s => t => mergeDeep(t, s);

module.exports = function applier() {
  if (arguments.length === 0) {
    throw new Error('applier needs one o more arguments.')
  }
  return _applier.apply(this, arguments);
};