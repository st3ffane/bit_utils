'use strict';

class BinaryVector {
  constructor(value = 0){
    this._value = value;

  }

  /**
   * Retourne un vecteur EMPTY, ie, initialisé 'vide'
   */
  static empty(){
    return new BinaryVector(0);
  }
}


module.exports = BinaryVector;