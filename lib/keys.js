/**
 * @description Gets keys from an object
 * @param o Object to get keys
 * @private
 */
const _keys = o => Object.keys(o);

module.exports = function keys() {
  if (arguments.length === 0) {
    throw new Error('keys needs an object');
  } else if (arguments[0] instanceof Object) {
    return _keys.apply(this, arguments);
  }
  throw new Error('the argument must be an object.');
};