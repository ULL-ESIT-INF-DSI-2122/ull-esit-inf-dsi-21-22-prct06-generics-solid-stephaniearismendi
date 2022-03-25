import {expect} from 'chai';
import 'mocha';
import {Documentales} from '../../src/ejercicio-2/Documentales';

const documentalesBaseDatos = new Documentales([{year: 2021, descriptor: 'Información y actualidad', titulo: 'El ejército de hackers de China', cadena: 'RTVE'},
  {year: 2021, descriptor: 'Biografías', titulo: 'Ruiz-Mateos: el primer fenómeno viral', cadena: 'RTVE'}]);

describe('Documentales tests: ', () => {
  it('searchByDescriptor("Ciencia y Naturaleza") to be undefined', () =>{
    expect(documentalesBaseDatos.searchByDescriptor('Ciencia y Naturaleza')).to.be.undefined;
  });
  it('searchByDescriptor("Biografías") must return Ruiz-Mateos: el primer fenómeno viral', () =>{
    expect(documentalesBaseDatos.searchByDescriptor('Biografías')).to.be.deep.equal([
      {
        year: 2021,
        descriptor: 'Biografías',
        titulo: 'Ruiz-Mateos: el primer fenómeno viral',
        cadena: 'RTVE',
      },
    ]);
  });
  it('searchByName("Ovnis: Proyectos de Alto Secreto desclasificado") to be undefined', () =>{
    expect(documentalesBaseDatos.searchByName('Ovnis: Proyectos de Alto Secreto desclasificado')).to.be.undefined;
  });
  it('searchByName("Ruiz-Mateos: el primer fenómeno viral") must return Ruiz-Mateos: el primer fenómeno viral', () =>{
    expect(documentalesBaseDatos.searchByName('Ruiz-Mateos: el primer fenómeno viral')).to.be.deep.equal([
      {
        year: 2021,
        descriptor: 'Biografías',
        titulo: 'Ruiz-Mateos: el primer fenómeno viral',
        cadena: 'RTVE',
      },
    ]);
  });
  it('searchByYear(2007) to be undefined', () =>{
    expect(documentalesBaseDatos.searchByYear(2007)).to.be.undefined;
  });
  it('searchByYear(2021) must return Ruiz-Mateos: el primer fenómeno viral and El ejército de hackers de China', () =>{
    expect(documentalesBaseDatos.searchByYear(2021)).to.be.deep.equal([
      {
        year: 2021,
        descriptor: 'Información y actualidad',
        titulo: 'El ejército de hackers de China',
        cadena: 'RTVE',
      },
      {
        year: 2021,
        descriptor: 'Biografías',
        titulo: 'Ruiz-Mateos: el primer fenómeno viral',
        cadena: 'RTVE',
      },
    ]);
  });
  it('searchByCadena(Netflix) to be undefined', () =>{
    expect(documentalesBaseDatos.searchByCadena('Netflix')).to.be.undefined;
  });
  it('searchByCadena("RTVE") must return Ruiz-Mateos: el primer fenómeno viral and El ejército de hackers de China', () =>{
    expect(documentalesBaseDatos.searchByCadena('RTVE')).to.be.deep.equal([
      {
        year: 2021,
        descriptor: 'Información y actualidad',
        titulo: 'El ejército de hackers de China',
        cadena: 'RTVE',
      },
      {
        year: 2021,
        descriptor: 'Biografías',
        titulo: 'Ruiz-Mateos: el primer fenómeno viral',
        cadena: 'RTVE',
      },
    ]);
  });
});
