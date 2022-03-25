import {expect} from 'chai';
import 'mocha';
import {Peliculas} from '../../src/ejercicio-2/Peliculas';

const peliculasBaseDeDatos = new Peliculas([{year: 2014, descriptor: 'Accion', titulo: 'Capitan América: El soldado de Invierno', director: 'Hermanos Russo', actores: ['Scarlett Johansson', 'Chris Evans']},
  {year: 2020, descriptor: 'Musical', titulo: 'Tick, Tick... Boom!', director: 'Lin-Manuel Miranda', actores: ['Andrew Garfield', 'Alexandra Shipp']}]);
describe('Peliculas tests: ', () => {
  it('searchByDescriptor("Accion") must return Capitán América The Winter Soldier', () =>{
    expect(peliculasBaseDeDatos.searchByDescriptor('Accion')).to.be.deep.equal([
      {
        year: 2014,
        descriptor: 'Accion',
        titulo: 'Capitan América: El soldado de Invierno',
        director: 'Hermanos Russo',
        actores: ['Scarlett Johansson', 'Chris Evans'],
      },
    ]);
  });
  it('searchByYear(2020) must return Tick, Tick... Boom!', () =>{
    expect(peliculasBaseDeDatos.searchByYear(2020)).to.be.deep.equal([
      {
        year: 2020,
        descriptor: 'Musical',
        titulo: 'Tick, Tick... Boom!',
        director: 'Lin-Manuel Miranda',
        actores: ['Andrew Garfield', 'Alexandra Shipp'],
      },
    ]);
  });
  it('searchByDirector("Lin-Manuel Miranda") must return Tick, Tick... Boom!', () =>{
    expect(peliculasBaseDeDatos.searchByDirector('Lin-Manuel Miranda')).to.be.deep.equal([
      {
        year: 2020,
        descriptor: 'Musical',
        titulo: 'Tick, Tick... Boom!',
        director: 'Lin-Manuel Miranda',
        actores: ['Andrew Garfield', 'Alexandra Shipp'],
      },
    ]);
  });
  it('searchByName("Capitan América: El soldado de Invierno") must return movie data', () =>{
    expect(peliculasBaseDeDatos.searchByName('Capitan América: El soldado de Invierno')).to.be.deep.equal([
      {
        year: 2014,
        descriptor: 'Accion',
        titulo: 'Capitan América: El soldado de Invierno',
        director: 'Hermanos Russo',
        actores: ['Scarlett Johansson', 'Chris Evans'],
      },
    ]);
  });
  it('searchByName("Star Wars") to be undefined', () =>{
    expect(peliculasBaseDeDatos.searchByName('Star Wars')).to.be.undefined;
  });
  it('searchByActores(["Andrew Garfield"]) to return Tick, Tick, Boom!', () =>{
    expect(peliculasBaseDeDatos.searchByActores(['Andrew Garfield'])).to.be.to.be.deep.equal([
      {
        year: 2020,
        descriptor: 'Musical',
        titulo: 'Tick, Tick... Boom!',
        director: 'Lin-Manuel Miranda',
        actores: ['Andrew Garfield', 'Alexandra Shipp'],
      },
    ]);
  });
  it('searchByDescriptor("Humor") to be undefined', () =>{
    expect(peliculasBaseDeDatos.searchByDescriptor('Humor')).to.be.undefined;
  });
  it('searchByYear(210) to be undefined', () =>{
    expect(peliculasBaseDeDatos.searchByYear(2010)).to.be.undefined;
  });
  it('searchByDirector("Steven Spielberg") to be undefined', () =>{
    expect(peliculasBaseDeDatos.searchByDirector('Steven Spielberg')).to.be.undefined;
  });
  it('searchByActores(["Sandra Bullock", "Jennifer Lawrence"]) to be undefined', () =>{
    expect(peliculasBaseDeDatos.searchByActores(['Sandra Bullock', 'Jennifer Lawrence'])).to.be.undefined;
  });
});
