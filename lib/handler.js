/**
 * @description Create a handler a kind of promise
 * @param cb Callback to handle
 */
const _handler = cb => (rs, rj) => {
  const fnR = r => rs(r);
  const fnE = e => rj(e);
  return a => cb(a)(fnR, fnE);
};

module.exports = function handler() {
  if (arguments.length === 0) {
    throw new Error('handler needs one function to handle.');
  }
  return _handler.apply(this, arguments);
};