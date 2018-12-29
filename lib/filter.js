const keys = require('./keys');
const curry = require('./curry');

/**
 * @description Filter by one where condition
 * @param w Where condition function (Predicate)
 * @param f Filterable or iterable
 * @returns {Function, Array} filter function or Array
 */
const _filter = (w, f) => {
  const type = Object.prototype.toString.call(f);
  if (type === '[object Function]') {
    return (a, c) => w(c) ? f(a, c) : a;
  } else if (type === '[object Object]') {
    return keys(f).reduce((acc, key) => {
      if (w(f[key])) {
        acc[key] = f[key];
      }
      return acc;
    }, {});
  } else if (type === '[object Array]') {
    return f.filter(w);
  }
};

module.exports = function filter() {
  if (arguments.length === 0) {
    throw new Error('filter needs one o more arguments.')
  } else if (arguments.length === 1) {
    return curry(_filter).apply(this, arguments);
  }
  return _filter.apply(this, arguments);
};