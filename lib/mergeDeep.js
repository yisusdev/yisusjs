const forOf = require('./forOf');
const keys = require('./keys');
const curry = require('./curry');

/**
 * @description Merge two object deeply
 * @param t Target object
 * @param s Source object
 * @returns {*} Target object
 * @private
 */
const _mergeDeep = (t, s) => {
  const fn = k => {
    if (s[k] instanceof Object) Object.assign(s[k], _mergeDeep(t[k], s[k]))
  };
  forOf(fn)(keys(s));
  Object.assign(t || {}, s);
  return t
};

module.exports = function mergeDeep() {
  if (arguments.length === 0) {
    throw new Error('mergeDeep needs one arguments.');
  } else if (arguments.length === 1) {
    return curry(_mergeDeep).apply(this, arguments);
  }
  return _mergeDeep.apply(this, arguments);
};