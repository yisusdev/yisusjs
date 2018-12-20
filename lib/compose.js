/**
 * @description Compose function to compose functions
 * @param fns Functions to reduce on composition
 * @returns {Function} Compose function
 */
const _compose = (...fns) => x => fns.reduceRight((f, m) => m(f), x);

module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose needs one o more arguments.');
  }
  return _compose.apply(this, arguments);
};