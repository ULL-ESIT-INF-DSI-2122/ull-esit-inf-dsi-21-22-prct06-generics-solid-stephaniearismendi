import {SearchableCollection} from './SearchableCollection';

export class StringSearchableCollections extends SearchableCollection<string> {
  constructor(items:string[]) {
    super(items);
  }
  /**
   * Método que devuelve todos los números que coincidan con el buscado
   * @param terminoBusqueda
   * @returns
   */
  search(terminoBusqueda: string): string[] | undefined {
    const arrayFinal:string[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == terminoBusqueda) {
        arrayFinal.push(this.items[i]);
      }
    }
    if (arrayFinal.length == 0) {
      return undefined;
    } else {
      return arrayFinal;
    }
  }
}