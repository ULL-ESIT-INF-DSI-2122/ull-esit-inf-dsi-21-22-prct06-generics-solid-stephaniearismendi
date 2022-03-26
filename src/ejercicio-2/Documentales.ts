import {BasicStreamableCollection} from './BasicStreamableCollection';
import {documentalDatos} from './Interfaces';

/**
 * Clase que controlará los Documentales dentro de la Colección
 * de multimedia streameable
 */
export class Documentales extends BasicStreamableCollection<documentalDatos> {
  constructor(protected items:documentalDatos[]) {
    super(items);
  }
  /**
   * Método que devuelve los datos de todos los elementos que coincidan
   * con un descriptor
   * @param terminoBusqueda
   * @returns array
   */
  searchByDescriptor(terminoBusqueda: string): documentalDatos[] | undefined {
    let arrayFinal:documentalDatos[] = [];
    arrayFinal = this.items.filter((obj) => {
      return obj.descriptor == terminoBusqueda;
    });
    if (arrayFinal.length == 0) {
      return undefined;
    } else {
      return arrayFinal;
    }
  }
  /**
   * Método que devuelve los datos de todos los elementos que coincidan
   * con un nombre
   * @param terminoBusqueda
   * @returns array
   */
  searchByName(terminoBusqueda: string): documentalDatos[] | undefined {
    let arrayFinal:documentalDatos[] = [];
    arrayFinal = this.items.filter((obj) => {
      return obj.titulo == terminoBusqueda;
    });
    if (arrayFinal.length == 0) {
      return undefined;
    } else {
      return arrayFinal;
    }
  }
  /**
   * Método que devuelve los datos de todos los elementos que coincidan
   * con un año
   * @param terminoBusqueda
   * @returns array
   */
  searchByYear(terminoBusqueda: number): documentalDatos[] | undefined {
    let arrayFinal:documentalDatos[] = [];
    arrayFinal = this.items.filter((obj) => {
      return obj.year == terminoBusqueda;
    });
    if (arrayFinal.length == 0) {
      return undefined;
    } else {
      return arrayFinal;
    }
  }
  /**
   * Método que devuelve los datos de todos los elementos que sean de
   * una cadena en concreto
   * @param terminoBusqueda
   * @returns array
   */
  public searchByCadena(terminoBusqueda:string): documentalDatos[] | undefined {
    let arrayFinal:documentalDatos[] = [];
    arrayFinal = this.items.filter((obj) => {
      return obj.cadena == terminoBusqueda;
    });
    if (arrayFinal.length == 0) {
      return undefined;
    } else {
      return arrayFinal;
    }
  }
}