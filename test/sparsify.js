'use strict';
const mocha = require('mocha');
const chai = require('chai');
chai.should();

const bit_utils = require('../index');

describe('Test Sparsify operations', ()=>{

  it('Should sparsify a vector - default parameters', (done)=>{
    let a = parseInt('10011',2); 
    let r = parseInt('1010100110100101',2)
    let c = bit_utils.sparsify(a);
    c.should.eq(r);
    done();
  });

  it('Should sparsify a vector - length 4', (done)=>{
    let a = parseInt('10011',2); 
    let r = parseInt('10100101',2)
    let c = bit_utils.sparsify(a, 4);
    c.should.eq(r);
    done();
  });

  it('Should sparsify a vector - length 4, offset 2', (done)=>{
    let a = parseInt('100110011',2); 
    let r = parseInt('10100101',2)
    let c = bit_utils.sparsify(a, 4);
    c.should.eq(r);
    done();
  });
  
  
});
