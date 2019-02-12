const keys = require('./keys');
const curry = require('./curry');

/**
 * @description Create a map function
 * @param fn Function to set on map callback
 * @param f Functor to set on map callback
 * @returns {Function} Map function
 */
const _map = (fn, f) => {
  const type = Object.prototype.toString.call(f);
  if (type === '[object Function]') {
    return (a, c) => f(a, fn(c));
  } else if (type === '[object Object]') {
    return keys(f).reduce((acc, key) => {
      acc[key] = fn(f[key]);
      return acc;
    }, {});
  } else {
    return f.map(fn);
  }
};

module.exports = function map() {
  if (arguments.length === 0) {
    throw new Error('map needs one or more arguments.')
  } else if (arguments.length === 1) {
    return curry(_map).apply(this, arguments);
  }
  return _map.apply(this, arguments);
};