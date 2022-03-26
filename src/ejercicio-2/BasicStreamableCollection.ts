import {Streamable, StreamSearch} from './Interfaces';

/**
 * Clase genérica que implementa una colección de multimedia
 * streameable
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>, StreamSearch<T> {
  constructor(protected items:T[]) {

  }
  /**
   * Método que añade un nuevo Item a la Colección
   * @param newItem
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }
  /**
   * Método que devuelve el Item de la Colección en un
   * índice concreto
   * @param index
   * @returns T
   */
  getItem(index: number): T {
    return this.items[index];
  }
  /**
   * Método que elimina el Item de la Colección en un
   * índice concreto
   * @param index
   */
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
  /**
   * Función que devuelve el número de elementos en la
   * colección
   * @returns number
   */
  getNumberOfITems(): number {
    let contador:number = 0;
    for (let i = 1; i <= this.items.length; i++) {
      contador = i;
    }
    return contador;
  }
  /**
   * Métodos abstractos
   */
  abstract searchByDescriptor(terminoBusqueda: string): T[] | undefined;
  abstract searchByName(terminoBusqueda: string): T[] | undefined;
  abstract searchByYear(terminoBusqueda: number): T[] | undefined;
}