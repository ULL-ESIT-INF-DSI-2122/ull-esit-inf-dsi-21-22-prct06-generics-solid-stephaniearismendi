import {Collectable} from './Interfaces';
import {Searchable} from './Interfaces';

export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  constructor(protected items:T[]) {
  }
  /**
   * método que añade un item genérico al array
   * @param newItem
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }
  /**
   * método que devuelve el item ubicado en el indice indicado
   * @param index
   * @returns
   */
  getItem(index: number): T {
    return this.items[index];
  }
  /**
   * metodo que elimina el elemento ubicado en cierto indice
   * @param index
   */
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
  /**
   * Método que devuelve el número de items
   * @returns
   */
  getNumberOfITems(): number {
    let contador:number = 0;
    for (let i = 0; i < this.items.length; i++) {
      contador = i;
    }
    return contador;
  }
  /**
   * Método abstracto que busca todos los elementos que coincidan con una búsqueda
   * @param terminoBusqueda
   */
  abstract search(terminoBusqueda: T): T[] | undefined
}