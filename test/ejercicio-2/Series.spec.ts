import {Series} from '../../src/ejercicio-2/Series';
import {expect} from 'chai';
import 'mocha';

const seriesBaseDeDatos = new Series([{year: 2011, descriptor: 'Drama', titulo: 'Teen Wolf', temporadas: 6, director: 'Jeff Davis'},
  {year: 2009, descriptor: 'Drama', titulo: 'The Vampire Diaries', temporadas: 8, director: 'Julie Plec'}]);

describe('series tests: ', () => {
  it('searchByDescriptor("Drama") must return Teen Wolf and The Vampire Diaries', () =>{
    expect(seriesBaseDeDatos.searchByDescriptor('Drama')).to.be.deep.equal([
      {
        year: 2011,
        descriptor: 'Drama',
        titulo: 'Teen Wolf',
        temporadas: 6,
        director: 'Jeff Davis',
      },
      {
        year: 2009,
        descriptor: 'Drama',
        titulo: 'The Vampire Diaries',
        temporadas: 8,
        director: 'Julie Plec',
      },
    ]);
  });
  it('searchByDescriptor("Humor") must return undefined', () =>{
    expect(seriesBaseDeDatos.searchByDescriptor('Humor')).to.be.undefined;
  });
  it('searchByName("Teen Wolf") must return Teen Wolf data', () =>{
    expect(seriesBaseDeDatos.searchByName('Teen Wolf')).to.be.deep.equal([
      {
        year: 2011,
        descriptor: 'Drama',
        titulo: 'Teen Wolf',
        temporadas: 6,
        director: 'Jeff Davis',
      },
    ]);
  });
  it('searchByName("Aqui no hay quien viva") must return undefined', () =>{
    expect(seriesBaseDeDatos.searchByName('Aqui no hay quien viva')).to.be.undefined;
  });
  it('searchByYear(2011) must return Teen Wolf data', () =>{
    expect(seriesBaseDeDatos.searchByYear(2011)).to.be.deep.equal([
      {
        year: 2011,
        descriptor: 'Drama',
        titulo: 'Teen Wolf',
        temporadas: 6,
        director: 'Jeff Davis',
      },
    ]);
  });
  it('searchByYear(2005) must return undefined', () =>{
    expect(seriesBaseDeDatos.searchByYear(2005)).to.be.undefined;
  });
  it('searchByTemporadas(6) must return Teen Wolf data', () =>{
    expect(seriesBaseDeDatos.searchByTemporadas(6)).to.be.deep.equal([
      {
        year: 2011,
        descriptor: 'Drama',
        titulo: 'Teen Wolf',
        temporadas: 6,
        director: 'Jeff Davis',
      },
    ]);
  });
  it('searchByTemporadas(2) must return undefined', () =>{
    expect(seriesBaseDeDatos.searchByTemporadas(2)).to.be.undefined;
  });
  it('searchByDirector("Julie Plec") must return The Vampire Diaries', () =>{
    expect(seriesBaseDeDatos.searchByDirector('Julie Plec')).to.be.deep.equal([
      {
        year: 2009,
        descriptor: 'Drama',
        titulo: 'The Vampire Diaries',
        temporadas: 8,
        director: 'Julie Plec',
      },
    ]);
  });
  it('searchByDirector("Andy Muschietti") must return undefined', () =>{
    expect(seriesBaseDeDatos.searchByDirector('Andy Muschietti')).to.be.undefined;
  });
});