/**
 * @description Create a map function
 * @param fn Function to set on map callback
 * @returns {Function} Map function
 */
const _map = fn => a => a.map(fn);

module.exports = function map() {
  if (arguments.length === 0) {
    throw new Error('map needs one or more arguments.')
  }
  return _map.apply(this, arguments);
};