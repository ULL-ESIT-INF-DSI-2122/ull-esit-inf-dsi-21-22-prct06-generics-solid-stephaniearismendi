import {RandomNumber} from './randomNumber';

/**
 * Clase que implementa iterable y en la que se almacenarán los números
 * aleatorios
 */
export class RandomNumberSetCollection implements Iterable<number> {
  private items:Set<number>;
  constructor(items:number[], private n:number, private m:number) {
    this.items = new Set(items);
    this.n = n;
    this.m = m;
  }
  /**
   * añade un número aleatorio
   * @param randomNumber
   */
  public addRandomNumber(randomNumber:number):void {
    this.items.add(randomNumber);
  }
  /**
   * iterador
   * @returns
   */
  [Symbol.iterator]():Iterator<number> {
    return this.items.values();
  }
}