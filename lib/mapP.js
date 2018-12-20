/**
 * @description Create a map function
 * @param fn Function to set on map callback
 * @returns {Function} Map promise
 */
const _mapP = fn => a => Promise.resolve(a.map(fn));

module.exports = function mapP() {
  if (arguments.length === 0) {
    throw new Error('mapP needs one or more arguments.')
  }
  return _mapP.apply(this, arguments);
};