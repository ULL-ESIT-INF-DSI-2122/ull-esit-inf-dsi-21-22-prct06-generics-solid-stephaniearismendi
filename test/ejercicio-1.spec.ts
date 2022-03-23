import 'mocha';
import {expect} from 'chai';
import {Combat} from '../src/ejercicio-1/Combat';
import {Pokemon} from '../src/ejercicio-1/Pokemon';
import {Marvel} from '../src/ejercicio-1/Marvel';
import {Shadowhunters} from '../src/ejercicio-1/Shadowhunters';
import {DC} from '../src/ejercicio-1/DC';
import {BaseDeDatos} from '../src/ejercicio-1/BaseDeDatos';
import {NumericSearchableCollections} from '../src/ejercicio-clase/NumericSearchableCollection';
import {StringSearchableCollections} from '../src/ejercicio-clase/StringSearchableCollection';

const Pikachu = new Pokemon('electrico', ['impactrueno', 'electrico'],
    70, 'Pikachu', 0.4, 6, '¡Pika, pika!', 40);
const Jace = new Shadowhunters(50, 'Jace Herondale', 1.80, 82,
    '¿Quieres llevar esto afuera y probar esas habilidades de lucha?', 80, 'fortis');
const BlackWidow = new Marvel('Black Widow', 60, 1.70, 59.42, 'No necesito un arma. Yo soy un arma.', 70, false, true, 'widow bites');
const ScarlettWitch = new Marvel('Scarlett Witch', 90, 1.60, 60.42, 'Me arrebataste todo.', 70, true, false);
const HarleyQuinn = new DC(50, 'Harley Quinn', 1.68, 63.5, 'La muerte es un estado mental, cariño.', 70, false, true, 'bate');
const baseDeDatos = new BaseDeDatos([Pikachu, Jace, BlackWidow, ScarlettWitch]);
baseDeDatos.insertarParticipante(HarleyQuinn);

describe('Ejercicio 1 test: ', () => {
  it('CalcularPoder Marvel. 60 => 60 si no es mutante', () =>{
    expect(BlackWidow.calcularPoder()).to.be.equal(60);
  });
  it('CalcularPoder Marvel. 90 => 180 si es mutante', () =>{
    expect(ScarlettWitch.calcularPoder()).to.be.equal(180);
  });
  it('CalcularAguante Marvel. 70 => 140 si no es mutante', () =>{
    expect(BlackWidow.calcularAguante()).to.be.equal(140);
  });
  it('CalcularAguante Marvel. 70 => 70 si es mutante', () =>{
    expect(ScarlettWitch.calcularAguante()).to.be.equal(70);
  });
  it('Frase atacar marvel. Si no lleva arma es aleatoria, no puede ser undefined', () =>{
    expect(ScarlettWitch.fraseAtacar()).to.not.be.undefined;
  });
  it('Frase atacar marvel. Si lleva arma -> "Black Widow ha golpeado a su rival con su widow bites"', () =>{
    expect(BlackWidow.fraseAtacar()).to.be.equal('Black Widow ha golpeado a su rival con su widow bites.');
  });
});

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