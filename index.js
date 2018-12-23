const compose = require('./lib/compose');
const filter = require('./lib/filter');
const filterP = require('./lib/filterP');
const map = require('./lib/map');
const mapP = require('./lib/mapP');
const where = require('./lib/where');
const applier = require('./lib/applier');
const equals = require('./lib/equals');
const gt = require('./lib/gt');
const gte = require('./lib/gte');
const lt = require('./lib/lt');
const lte = require('./lib/lte');
const flatten = require('./lib/flatten');
const pipe = require('./lib/pipe');
const pipeP = require('./lib/pipeP');
const merge = require('./lib/merge');
const thunk = require('./lib/thunk');
const curry = require('./lib/curry');
const constant = require('./lib/constant');
const forOf = require('./lib/forOf');
const keys = require('./lib/keys');
const mergeDeep = require('./lib/mergeDeep');
const diffs = require('./lib/diffs');
const diffsBy = require('./lib/diffsBy');
const dropout = require('./lib/dropout');

module.exports = {
  compose,
  filter,
  filterP,
  map,
  mapP,
  where,
  applier,
  equals,
  gt,
  gte,
  lt,
  lte,
  flatten,
  pipe,
  pipeP,
  merge,
  thunk,
  curry,
  constant,
  forOf,
  keys,
  mergeDeep,
  diffs,
  diffsBy,
  dropout
};