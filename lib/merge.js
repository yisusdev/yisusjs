/**
 * @description Merge deeply two objects
 * @param o Original object to merge
 * @private
 */
const _merge = o => n => JSON.parse(JSON.stringify(Object.assign({}, o, n)));

module.exports = function merge() {
  if (arguments.length === 0) {
    throw new Error('merge needs one argument');
  }
  return _merge.apply(this, arguments);
};