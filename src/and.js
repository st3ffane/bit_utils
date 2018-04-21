'use strict';

/**
 * AND Binaire de 2 entiers
 * exemple:
 *    31 (11111) AND 10 (00101) = 10 (00101)
 * @param {int32} v1 le premier binaire de l'operation (int32)
 * @param {int32} v2 le second binaire de l'operation (int32)
 * @param {int32} length nombre de bits a prendre en compte pour le calcul (max: 32, defaut 8)
 * @param {int32} offset index du permier bit a prendre en compte (defaut 0, max = 32-length)
 * 
 * @return {int} le resultat de l'operation AND
 */
module.exports = function (v1, v2, length=8, offset = 0 ) {
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
  return ((v1 & v2) >> o ) & mask;
}
