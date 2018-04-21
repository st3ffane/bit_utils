'use strict';
const mocha = require('mocha');
const chai = require('chai');
chai.should();

const bit_utils = require('../index');

describe('Test XOR operations', ()=>{

  it('Should XOR 2 vectors - default parameters', (done)=>{
    let a = parseInt('11010',2); 
    let b = parseInt('10110',2);
    let r = parseInt('01100', 2);
    let c = bit_utils.xor(a,b);
    c.should.eq(r);
    done();
  });
  it('Should XOR 2 vectors - limit to 4 first bits', (done)=>{
    let a = parseInt('11011',2); 
    let b = parseInt('10110',2);
    let r = parseInt('01101', 2);
    let c = bit_utils.xor(a,b,  4);
    c.should.eq(r);
    done();
  });
  it('Should XOR 2 vectors - limit to 5 bits, start offset 2', (done)=>{
    let a = parseInt('0110011',2); 
    let b = parseInt('1110110',2);
    let r = parseInt('0001', 2);
    let c = bit_utils.xor(a,b,  4, 2);
    c.should.eq(r);
    done();
  });
  
});
