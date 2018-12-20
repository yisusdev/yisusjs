/**
 * @description Make flat an Array.
 * @param a Array to flatten
 * @private
 * @return a flatten Array
 */
const _flatten = a => a.reduce((p, c) => {
  return Array.isArray(c) ? p.concat(_flatten(c)) : p.concat(c)
}, []);

module.exports = function flatten() {
  if (arguments.length === 0) {
    throw new Error('flatten needs one array.');
  }
  return _flatten.apply(this, arguments);
};