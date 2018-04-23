'use strict';

const ops = require('../ops');
/**
 * Implementation d'une CMM: une matrice associant 2 vecteurs ensembles
 * et pouvant les reconnaitre meme avec des versions 'polluées'
 */
class CMM {

  /**
   * 
   * @param {int32} input_size length des vecteurs d'input (min 2, max: 32, default 8)
   * @param {int32} output_size length des vecteurs d'output (min 2, max: 32, default 8)
   * @param {int32} bsc bit set count: nombre de bits sets dans un vecter d'output pour considérer avoir une reponses
   *                    min 0, max: output_size, defaut: 4
   */
  constructor(input_size = 8, output_size = 8, bsc = 4) {
    this._input_size = input_size >= 2 ?
                      input_size <= 32 ?
                      input_size : 8 : 8;
    this._output_size = output_size >= 2 ?
                      output_size <= 32 ?
                      output_size : 8 : 8;
    this._bsc = bsc >= 0 ?
                bsc <=this._output_size ?
                bsc : this._output_size : 4;
    this._matrice = [];
    // initialise a 0
    this._init();


  }

  /**
   * Initialise la matrice a 0 (vide)
   */
  _init(){
    for(let a = 0; a < this._input_size; a++) this._matrice.push(0);
  }

  /**
   * 
   * @param {int32} input le vecteur d'input a sauvegarder
   * @param {int32} output le vecteur d'output associé
   */
  associate(input, output) {
    for (let i=0; i<this._input_size; i++){
      if((input >> i) & 1) {
        // update matrice
        this._matrice[i] = ops.or(output, this._matrice[i]);
      }
    }
  }

  /**
   * 
   * @param {VECTOR} input le vecteur d'input a reconnaitre
   * @param {int32} relax l'approximation autorisée (min 0, max bsc, defaut 0)
   */
  recall (input, relax = 0) {
    const bsc = - (this._bsc - relax)  +1;
    const rep  = []; // la reponse de la cmm
    for(let i = this._output_size; i--;) rep.push[bsc];
    const matrice = this._matrice;

    

    for (let i=0; i<this._input_size; i++){      
      if((input >> i) & 1) {
        // read matrice
        const v = matrice[j];
        for(let j = 0; j< this._output_size; j++) {
          rep[j]+= (v >> j) & 1;
        }
      }
    }
    // compare au bsc
    return rep.reduce( (acc, el, i)=>{
      return acc += el >0 ? (1 << i) : 0;
    });

  }

}


'use strict';

const ops = require('../ops');
/**
 * Implementation d'une CMM: une matrice associant 2 vecteurs ensembles
 * et pouvant les reconnaitre meme avec des versions 'polluées'
 */
class CMM2 {

  /**
   * 
   * @param {VECTOR} input factory des vecteurs d'input
   * @param {VECTOR} output factory des vecteurs d'output
   */
  constructor(input, output) {
    this._if = input;
    this._of = output;
    this._matrice = [];
    // initialise a 0
    let o_op = output.getFactoryOptions().size;
    for(let a = 0; a < o_op; a++) this._matrice.push(input.empty());


  }


  /**
   * 
   * @param {int32} input le vecteur d'input a sauvegarder
   * @param {int32} output le vecteur d'output associé
   */
  associate(input, output) {
    let o_op = output.getFactoryOptions().size;
    for(let vector of this._matrice) vector.or(input);
  }

  /**
   * 
   * @param {VECTOR} input le vecteur d'input a reconnaitre
   * @param {int32} relax l'approximation autorisée (min 0, max bsc, defaut 0)
   */
  recall (input, relax = 0) {
    const bsc = - (this._bsc - relax)  +1;
    const rep  = []; // la reponse de la cmm
    for(let i = this._output_size; i--;) rep.push[bsc];
    const matrice = this._matrice;

    

    for (let i=0; i<this._input_size; i++){      
      if((input >> i) & 1) {
        // read matrice
        const v = matrice[j];
        for(let j = 0; j< this._output_size; j++) {
          rep[j]+= (v >> j) & 1;
        }
      }
    }
    // compare au bsc
    return rep.reduce( (acc, el, i)=>{
      return acc += el >0 ? (1 << i) : 0;
    });

  }

}

/**
 * Return une nouvelle CMM avec les informations de configurations passées
 * @param {VECTOR_OP} vector_op un processeur pour le calcul sur les vecteurs (ex: bt_utils) 
  * @param {int32} input_size length des vecteurs d'input (min 2, max: 32, default 8)
  * @param {int32} output_size length des vecteurs d'output (min 2, max: 32, default 8)
  * @param {int32} bsc bit set count: nombre de bits sets dans un vecter d'output pour considérer avoir une reponses
  *                    min 0, max: output_size, defaut: 4
    
 */
module.exports = function (vector_op, input_size = 8, output_size = 8, bsc = 4){
  return new CMM(vector_op, input_size, output_size, bsc);
}
/**
 * Return une nouvelle CMM avec les informations de configurations passées
 * @param {VECTOR_OP} vector_op un processeur pour le calcul sur les vecteurs (ex: bt_utils) 
  * @param {int32} input_size length des vecteurs d'input (min 2, max: 32, default 8)
  * @param {int32} output_size length des vecteurs d'output (min 2, max: 32, default 8)
  * @param {int32} bsc bit set count: nombre de bits sets dans un vecter d'output pour considérer avoir une reponses
  *                    min 0, max: output_size, defaut: 4
    
 */
module.exports = function (vector_op, input_size = 8, output_size = 8, bsc = 4){
  return new CMM(vector_op, input_size, output_size, bsc);
}