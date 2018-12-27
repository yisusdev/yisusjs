const flatten = require('./flatten');
const map = require('./map');

/**
 * @description Maps a function over a list
 * @param functorFn
 * @param monad Monad or list
 * @returns {function(*=): *}
 * @private
 */
const _flatMap = (functorFn, monad) => {
  if (typeof monad === 'function') {
    return l => functorFn(monad(l))(l);
  }
  return flatten(map(functorFn)(monad));
};

module.exports = function flatMap() {
  if (arguments.length < 2) {
    throw new Error('flatMap needs two arguments.');
  }
  return _flatMap.apply(this, arguments);
};