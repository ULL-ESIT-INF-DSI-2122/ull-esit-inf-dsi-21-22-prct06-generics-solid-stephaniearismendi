import {BasicStreamableCollection} from './BasicStreamableCollection';
import {SeriesDatos} from './Interfaces';

/**
 * Clase que implementa los métodos de las series en la
 * colección multimedia
 */
export class Series extends BasicStreamableCollection<SeriesDatos> {
  constructor(protected items:SeriesDatos[]) {
    super(items);
  }
  /**
   * Método que devuelve los datos de todos los elementos que coincidan
   * con un descriptor
   * @param terminoBusqueda
   * @returns array
   */
  searchByDescriptor(terminoBusqueda: string): SeriesDatos[] | undefined {
    let arrayFinal:SeriesDatos[] = [];
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
  searchByName(terminoBusqueda: string): SeriesDatos[] | undefined {
    let arrayFinal:SeriesDatos[] = [];
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
  searchByYear(terminoBusqueda: number): SeriesDatos[] | undefined {
    let arrayFinal:SeriesDatos[] = [];
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
   * Método que devuelve los datos de todas las series con un número
   * de temporadas concreto
   * @param terminoBusqueda
   * @returns array
   */
  public searchByTemporadas(terminoBusqueda:number): SeriesDatos[] | undefined {
    let arrayFinal:SeriesDatos[] = [];
    arrayFinal = this.items.filter((obj) => {
      return obj.temporadas == terminoBusqueda;
    });
    if (arrayFinal.length == 0) {
      return undefined;
    } else {
      return arrayFinal;
    }
  }
  /**
   * Método que devuelve los datos de todas las series dirigidas por un director
   * en concreto
   * @param terminoBusqueda
   * @returns array
   */
  public searchByDirector(terminoBusqueda:string): SeriesDatos[] | undefined {
    let arrayFinal:SeriesDatos[] = [];
    arrayFinal = this.items.filter((obj) => {
      return obj.director == terminoBusqueda;
    });
    if (arrayFinal.length == 0) {
      return undefined;
    } else {
      return arrayFinal;
    }
  }
}