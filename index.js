'use strict';

/**
 * F2CANN version 0.0.1
 */
module.exports = {
  and: require('./src/and'),
  or: require('./src/or'),
  xor: require('./src/xor'),
  not: require('./src/not'),
  sparsify: require('./src/sparsify'),
  is_overwritten: require('./src/is.overwritten'),
  factory: require('./src/binary.vector'),

};
