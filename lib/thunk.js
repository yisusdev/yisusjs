/**
 * @description Create a new thunk
 * @param fn Function to execute
 * @private
 */
const _thunk = fn => (...p) => () => fn.apply(this, p);

module.exports = function thunk() {
  if (arguments.length === 0) {
    throw new Error('thunk needs one argument');
  }
  return _thunk.apply(this, arguments);
};