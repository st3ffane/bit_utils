'use strict';
const mocha = require('mocha');
const chai = require('chai');
chai.should();

const bit_utils = require('../index');

describe('Test IS OVERWRITTEN', ()=>{

  it('Should is_overwritten = false - default parameters', (done)=>{
    let a = parseInt('11011',2); 
    let b = parseInt('10010',2);
    let c = bit_utils.is_overwritten(a,b);
    c.should.eq(false);
    done();
  });
  it('Should is_overwritten = true - default parameters', (done)=>{
    let a = parseInt('11011',2); 
    let b = parseInt('10010',2);
    let c = bit_utils.is_overwritten(b,a);
    c.should.eq(true);
    done();
  });

  it('Should is_overwritten = false - length 4', (done)=>{
    let a = parseInt('01011',2); 
    let b = parseInt('10010',2);
    let c = bit_utils.is_overwritten(a,b,4);
    c.should.eq(false);
    done();
  });
  it('Should is_overwritten = true - length 4', (done)=>{
    let a = parseInt('111011',2); 
    let b = parseInt('010010',2);
    let c = bit_utils.is_overwritten(b,a,4);
    c.should.eq(true);
    done();
  });

  it('Should is_overwritten = false - length 4, offset 2', (done)=>{
    let a = parseInt('101011',2); 
    let b = parseInt('110010',2);
    let c = bit_utils.is_overwritten(a,b,4,2);
    c.should.eq(false);
    done();
  });
  it('Should is_overwritten = true - length 4, offset 2', (done)=>{
    let a = parseInt('111001',2); 
    let b = parseInt('110010',2);
    let c = bit_utils.is_overwritten(b,a,4, 2);
    c.should.eq(true);
    done();
  });
  
  
});
