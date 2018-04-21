'use strict';
const and = require('./and');
/**
 * Verifie si 2 vecteurs sont overwritten, ie, si tous les bits sets du premier vecteur sont
 * set dans le second aussi
 */
module.exports = function (v1, v2, length=8, offset = 0){
  let i = length > 0 ? 
          length < 32 ? length : 8
          : 8 ;
  const o = offset > 0 ?
          offset + length < 32 ?
          offset : 0
          : 0;
  //mask extras bits
  let mask = Math.pow(2,length) -1;
  let cmp = (v1 >> o) & mask;
  // shit to offset
  return (((v1 & v2) >> o ) & mask) == cmp;
}