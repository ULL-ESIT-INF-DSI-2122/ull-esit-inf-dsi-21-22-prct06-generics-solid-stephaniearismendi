import {Cifrado} from './Cifrado';

const cifrado = new Cifrado('HOLAESTOESUNAPRUEBA', 'CLAVE');
console.log(cifrado.checkDisplacement('b'));
cifrado.checkLongClave();
