import 'mocha';
import {expect} from 'chai';
import {Combat} from '../src/ejercicio-1/Combat';
import {Pokemon} from '../src/ejercicio-1/Pokemon';
import {Marvel} from '../src/ejercicio-1/Marvel';
import {Shadowhunters} from '../src/ejercicio-1/Shadowhunters';
import {DC} from '../src/ejercicio-1/DC';
import {BaseDeDatos} from '../src/ejercicio-1/BaseDeDatos';

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