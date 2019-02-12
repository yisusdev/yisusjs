const keys = require('./keys');
const forOf = require('./forOf');
const curry = require('./curry');

/**
 * @description Functor for objects
 * @param f Function to apply in each key
 * @param o Object to iterate
 * @private
 */
const _forIn = (f, o) => {
  const ks = keys(o);
  const fn = k => {
    if (o.hasOwnProperty(k)) {
      f(k);
    }
  };
  forOf(fn)(ks);
};

module.exports = function forIn() {
  if (arguments.length === 0) {
    throw new Error('forIn needs one argument.');
  } else if (arguments.length === 1) {
    return curry(_forIn).apply(this, arguments);
  }
  return _forIn.apply(this, arguments);
};

