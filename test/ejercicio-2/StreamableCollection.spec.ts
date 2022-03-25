import {expect} from 'chai';
import 'mocha';
import {Series} from '../../src/ejercicio-2/Series';

const seriesBaseDeDatos = new Series([{year: 2011, descriptor: 'Drama', titulo: 'Teen Wolf', temporadas: 6, director: 'Jeff Davis'},
  {year: 2009, descriptor: 'Drama', titulo: 'The Vampire Diaries', temporadas: 8, director: 'Julie Plec'}]);

describe('Basic Streamable Collection tests: ', () => {
  it('getItem to return items in index one', () =>{
    expect(seriesBaseDeDatos.getItem(1)).to.be.deep.equal(
        {
          year: 2009,
          descriptor: 'Drama',
          titulo: 'The Vampire Diaries',
          temporadas: 8,
          director: 'Julie Plec',
        },
    );
  });
  it('getNumberOfITems to return 2', () =>{
    expect(seriesBaseDeDatos.getNumberOfITems()).to.be.equal(2);
  });
  it('addItem to not thrown an error', () =>{
    expect(seriesBaseDeDatos.addItem({year: 2021, descriptor: 'Animación', titulo: 'Arcane', temporadas: 1, director: 'Ash Brannon'})).to.not.throw;
  });
  it('getNumberOfITems to return 3', () =>{
    expect(seriesBaseDeDatos.getNumberOfITems()).to.be.equal(3);
  });
  it('removeItem to not thrown an error', () =>{
    expect(seriesBaseDeDatos.removeItem(1)).to.not.throw;
  });
  it('getNumberOfITems to return 2', () =>{
    expect(seriesBaseDeDatos.getNumberOfITems()).to.be.equal(2);
  });
});