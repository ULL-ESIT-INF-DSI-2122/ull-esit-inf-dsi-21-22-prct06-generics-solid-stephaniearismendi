import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../../src/ejercicio-30-marzo-clase/randomNumber';

const randomNumbeR = RandomNumber.getRandomInstance();
describe('Test ejercicio random numbers: ', () => {
  it('GetAleatorioEntero to return entero entre n y m', () =>{
    expect(randomNumbeR.getAleatorioEntero(1, 3)).to.be.within(1, 3);
  });
  it('GetAleatorio sin parametros must return a float between [0,1]', () =>{
    expect(randomNumbeR.getAleatorioFlotante()).to.be.within(0, 1);
  });
  it('GetAleatorio con parametros must return a float between [n,m]', () =>{
    expect(randomNumbeR.getAleatorioFlotanteDefinido(1, 4)).to.be.within(1, 4);
  });
});