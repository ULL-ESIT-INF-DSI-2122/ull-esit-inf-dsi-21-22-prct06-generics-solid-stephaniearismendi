import {Streamable, StreamSearch} from './Interfaces';

export abstract class BasicStreamableCollection<T> implements Streamable<T>, StreamSearch<T> {
  constructor(protected items:T[]) {

  }
  addItem(newItem: T): void {
    this.items.push(newItem);
  }
  getItem(index: number): T {
    return this.items[index];
  }
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
  getNumberOfITems(): number {
    let contador:number = 0;
    for (let i = 1; i <= this.items.length; i++) {
      contador = i;
    }
    return contador;
  }
  abstract searchByDescriptor(terminoBusqueda: string): T[] | undefined;
  abstract searchByName(terminoBusqueda: string): T[] | undefined;
  abstract searchByYear(terminoBusqueda: number): T[] | undefined;
}