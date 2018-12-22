/**
 * @description Create a pipe to execute functions
 * @param fns Functions to execute in pipeline
 * @private
 */
const _pipe = (...fns) => x => fns.reduce((f, m) => m(f), x);

module.exports = function pipe() {
  if (arguments.length < 2) {
    throw new Error('pipe needs two o more functions to works');
  }
  return _pipe.apply(this, arguments);
};