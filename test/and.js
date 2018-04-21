'use strict';
const mocha = require('mocha');
const chai = require('chai');
chai.should();

const bit_utils = require('../index');

describe('Test AND operations', ()=>{

  it('Should AND 2 vectors - default parameters', (done)=>{
    let a = parseInt('11011',2); 
    let b = parseInt('10110',2);
    let r = parseInt('10010', 2);
    let c = bit_utils.and(a,b);
    c.should.eq(r);
    done();
  });
  it('Should AND 2 vectors - limit to 4 first bits', (done)=>{
    let a = parseInt('11011',2); 
    let b = parseInt('10110',2);
    let r = parseInt('00010', 2);
    let c = bit_utils.and(a,b,  4);
    c.should.eq(r);
    done();
  });
  it('Should AND 2 vectors - limit to 5 bits, start offset 2', (done)=>{
    let a = parseInt('11011',2); 
    let b = parseInt('10110',2);
    let r = parseInt('00100', 2);
    let c = bit_utils.and(a,b,  5, 2);
    c.should.eq(r);
    done();
  });
  
});
