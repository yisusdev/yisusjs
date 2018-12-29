const curry = require('./curry');

/**
 * @description Create a transducer using a compose functions
 * @param xf Compose functions to init
 * @param rd Reducer to be applied after get compose result
 * @param it Init value to apply reduce function
 * @param ls List or Array to apply a reducer
 */
const _transducer = (xf, rd, it, ls) => ls.reduce(xf(rd), it);

module.exports = function transducer() {
  if (arguments.length === 0) {
    throw new Error('transducer needs arguments.');
  } else if (arguments.length === 1) {
    return curry(_transducer).apply(this, arguments);
  }
  return _transducer.apply(this, arguments);
};