/**
 * @description Gets the nested arity's
 * @param fn Function to apply or pass
 * @param i accumulator
 * @param args arguments to apply to fn
 * @return {function(*=)}
 * @private
 */
const _arity = (fn, i, args) => {
  return (x) => {
    args.push(x);
    if (i === fn.length) {
      return fn(...args);
    }
    return _arity(fn, i + 1, args);
  };
};

/**
 * @description Curry a non curried function
 * @param fn Function to curry
 * @return {*}
 * @private
 */
const _curry = fn => {
  if (fn.length === 0) {
    return fn;
  }
  const args = [];
  return _arity(fn, 1, args);
};

module.exports = function curry() {
  if (arguments.length === 0) {
    throw new Error('curry needs one argument');
  }
  return _curry.apply(this, arguments);
};