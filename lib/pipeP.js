/**
 * @description Create a pipe for promises
 * @param fns Promises functions
 * @private
 */
const _pipeP = (...fns) => (
  fns.reduce((f, g) => x => f(x).then(g))
);

module.exports = function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP needs at least a promise.');
  }
  return _pipeP.apply(this, arguments);
};