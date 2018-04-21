'use strict';

/**
 * NOT Binaire d'un vecteur'
 * exemple:
 *    31 (11111) AND 10 (00101) = 10 (00101)
 * @param {int32} v le premier binaire a inverser (int32)
 * @param {int32} length nombre de bits a prendre en compte pour le calcul (max: 32, defaut 8)
 * @param {int32} offset index du permier bit a prendre en compte (defaut 0, max = 32-length)
 * 
 * @return {int} le resultat de l'operation AND
 */
module.exports = function (v, length=8, offset = 0 ) {
  let i = length > 0 ? 
          length < 32 ? length : 8
          : 8 ;
  const o = offset > 0 ?
          offset + length < 32 ?
          offset : 0
          : 0;
  //mask extras bits
  let mask = Math.pow(2,length) -1;
  // shit to offset
  return ((~v) >> o) & mask;  
}
