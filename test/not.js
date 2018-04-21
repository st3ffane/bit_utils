'use strict';
const mocha = require('mocha');
const chai = require('chai');
chai.should();

const bit_utils = require('../index');

describe('Test NOT operations', ()=>{

  it('Should NOT a vectors - default parameters', (done)=>{
    let a = parseInt('11011',2);
    let r = parseInt('11100100',2);  
    let c = bit_utils.not(a);
    c.should.eq(r);
    done();
  });

  it('Should NOT a vectors - length = 4', (done)=>{
    let a = parseInt('11011',2);
    let r = parseInt('0100',2);  
    let c = bit_utils.not(a, 4);
    c.should.eq(r);
    done();
  });
  
  it('Should NOT a vectors - length 4 offset 2', (done)=>{
    let a = parseInt('11011',2);
    let r = parseInt('1001',2);  
    let c = bit_utils.not(a, 4, 2);
    c.should.eq(r);
    done();
  });
  
});
