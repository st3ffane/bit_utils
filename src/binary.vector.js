'use strict';
const ops = require('../../index');
class BinaryVector {
  constructor(size, bsc){
    this._bsc = bsc;
    this._size = size;
    this._value = 0;
  }

  get value(){return this._value;}
  set value(v){this._value = v;}

  or(vector){
    ops.or(vector, input); // probleme, doit le faire 'in place'
  }
}

/**
 * Une factory pour la création des vectors
 * @param {int32} size la taille en bits du vecteur
 * @param {int32} bsc le bit set count pour etre 'valide'
 */
function factory (size, bsc){
  size = size >0 ?
        size <=32 ?
        size : 32 : 8;
  bsc = bsc > 0 ?
      bsc < size ?
      bsc : size : 4;

  /**
   * Renvoie un vecteur 'vide', ie initialisé a 0
   */
  function empty(){
    return new BinaryVector(size, bsc);
  }
  /**
   * Retourne les options de la factory
   */
  function getFactoryOptions(){
    return {
      size: size,
      bsc: bsc
    }
  }

  
}

module.exports = factory;