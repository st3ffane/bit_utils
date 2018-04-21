'use strict';
const mocha = require('mocha');
const chai = require('chai');
chai.should();

const bit_utils = require('../index');

describe('Test OR operations', ()=>{

  it('Should OR 2 vectors - default parameters', (done)=>{
    let a = parseInt('11010',2); 
    let b = parseInt('10110',2);
    let r = parseInt('11110', 2);
    let c = bit_utils.or(a,b);
    c.should.eq(r);
    done();
  });
  it('Should OR 2 vectors - limit to 4 first bits', (done)=>{
    let a = parseInt('11011',2); 
    let b = parseInt('10110',2);
    let r = parseInt('01111', 2);
    let c = bit_utils.or(a,b,  4);
    c.should.eq(r);
    done();
  });
  it('Should OR 2 vectors - limit to 5 bits, start offset 2', (done)=>{
    let a = parseInt('0110011',2); 
    let b = parseInt('1110110',2);
    let r = parseInt('1101', 2);
    let c = bit_utils.or(a,b,  4, 2);
    c.should.eq(r);
    done();
  });
  
});
