import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../../src/ejercicio-3/Cifrado';

const cifrado = new Cifrado('HOLAESTOESUNAPRUEBA', 'CLAVE');
const cifrado2 = new Cifrado('HOLA', 'LOMA');
const descifrado = new Cifrado('KAMW', 'CLAVE');


describe('Cifrado tests: ', () => {
  it('splitEnarray("hola") debe separar los caracteres en un array', () =>{
    expect(cifrado.splitEnarray('hola')).to.be.deep.equal(['h', 'o', 'l', 'a']);
  });
  it('checkDisplacement("C") => 3', () =>{
    expect(cifrado.checkDisplacement('L')).to.be.equal(12);
  });
  it('displacementCharacter("O", 12) => A', () =>{
    expect(cifrado.displacementCharacter('O', 12)).to.be.equal('A');
  });
  it('displacementCharacter("A", -12) => O', () =>{
    expect(cifrado.displacementCharacter('A', -12)).to.be.equal('O');
  });
  it('checkLongClave => not throw', () =>{
    expect(cifrado.checkLongClave).to.not.throw;
  });
  it('checkLongClave => not throw', () =>{
    expect(cifrado2.checkLongClave).to.not.throw;
  });
  it('checkLongClave => exist', () =>{
    expect(cifrado2.checkLongClave).to.exist;
  });
  it('checkLongClave => be a function', () =>{
    expect(cifrado2.checkLongClave).to.be.a('function');
  });
  it('displacementString => KAMWJVFPAXXYBMWXPCW', () =>{
    expect(cifrado.displacementString()).to.be.equal('KAMWJVFPAXXYBMWXPCW');
  });
  it('descipher(KAMW) => HOLA', () =>{
    expect(descifrado.descipher()).to.be.equal('HOLA');
  });
});