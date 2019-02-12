const filter = require('./filter');
const curry = require('./curry');

/**
 * @description Gets if a predicate is in an array of objects.
 * @param pred Where function as filter predicate
 * @private
 */
const _includes = (pred, arr) => filter(pred)(arr).length > 0;

module.exports = function includes() {
  if (arguments.length === 0) {
    throw new Error('includes needs a predicate and an objects array')
  } else if (arguments.length === 1) {
    return curry(_includes).apply(this, arguments);
  }
  return _includes.apply(this, arguments);
};