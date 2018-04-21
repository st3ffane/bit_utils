'use strict';
const BITS = [parseInt('10',2), parseInt('01',2)];
/**
 * sparsify un entier ie, tranforme l'entier en une representation ayant autant de bits set qu'unset
 * utile pour identifier, dans une cmm, les vecteurs valides
 * exemple:
 * 001001  => 101001101001
 * 
 * @param {int} v l'entier a 'sparsifier'
 * @param {int} length le nombre de bits du vecteur a prendre en compte max: 16bits
 * @param {int} l'offset du premier bit a prendre en compte
 */
module.exports = function (v, length=8, offset = 0){
  let i = length > 0 ? 
          length < 16 ? length : 8
          : 8 ;
  const o = offset > 0 ?
          offset + length < 16 ?
          offset : 0
          : 0;
  let r = 0;
  // mask unecessary bits
  v = (v >> o) & (Math.pow(2,length) -1);
  for(let i=0, j=0; i<length; i++, j+=2){
    r |= BITS[+((v >> i) & 1)] << j;
  }
  return r;
}