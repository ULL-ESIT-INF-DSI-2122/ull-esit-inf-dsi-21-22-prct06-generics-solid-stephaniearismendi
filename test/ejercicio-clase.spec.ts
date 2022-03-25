import 'mocha';
import {expect} from 'chai';
import {NumericSearchableCollections} from '../src/ejercicio-clase/NumericSearchableCollection';
import {StringSearchableCollections} from '../src/ejercicio-clase/StringSearchableCollection';

const numerosCollection = new NumericSearchableCollections([1, 2, 3]);
const stringCollection = new StringSearchableCollections(['hola', 'adios', 'a', 'a']);
describe('Ejercicio clase tests: ', () => {
  it('GetItem(1) debe retornar dos, que es la posición 1 del array de números [1,2,3]', () =>{
    expect(numerosCollection.getItem(1)).to.be.equal(2);
  });
  it('GetString(1) debe retornar "adios", que es la posición 1 del array de strings [hola,adios,a]', () =>{
    expect(stringCollection.getItem(1)).to.be.equal('adios');
  });
  it('getNumberItems en numbers = > 2', () =>{
    expect(numerosCollection.getNumberOfITems()).to.be.equal(2);
  });
  it('getNumberItems en string = > 3', () =>{
    expect(stringCollection.getNumberOfITems()).to.be.equal(3);
  });
  it('search en numeros => [2]', () =>{
    expect(numerosCollection.search(2)).to.be.deep.equal([2]);
  });
  it('search "casa" en string => undefined', () =>{
    expect(stringCollection.search('casa')).to.be.undefined;
  });
  it('search "a" en string => [a]', () =>{
    expect(stringCollection.search('a')).to.be.deep.equal(['a', 'a']);
  });
});