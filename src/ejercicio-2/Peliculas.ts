import {BasicStreamableCollection} from './BasicStreamableCollection';
import {peliculasDatos} from './Interfaces';

/**
 * Clase que implementa los métodos de las películas en la
 * colección multimedia
 */
export class Peliculas extends BasicStreamableCollection<peliculasDatos> {
  constructor(protected items:peliculasDatos[]) {
    super(items);
  }
  /**
   * Método que devuelve los datos de todos los elementos que coincidan
   * con un descriptor
   * @param terminoBusqueda
   * @returns array
   */
  searchByDescriptor(terminoBusqueda: string): peliculasDatos[] | undefined {
    let arrayFinal:peliculasDatos[] = [];
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
  searchByName(terminoBusqueda: string): peliculasDatos[] | undefined {
    let arrayFinal:peliculasDatos[] = [];
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
  searchByYear(terminoBusqueda: number): peliculasDatos[] | undefined {
    let arrayFinal:peliculasDatos[] = [];
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
   * Método que devuelve los datos de todas las películas donde participen
   * uno o más actores
   * @param terminoBusqueda
   * @returns array
   */
  public searchByActores(terminoBusqueda:string[]):peliculasDatos[] | undefined {
    const arrayFinal:peliculasDatos[] = [];
    for (let i = 0; i < this.items.length; i++) {
      const found = this.items[i].actores.some((r)=> terminoBusqueda.includes(r));
      if (found) {
        arrayFinal.push(this.items[i]);
      }
    }
    if (arrayFinal.length == 0) {
      return undefined;
    } else {
      return arrayFinal;
    }
  }
  /**
   * Método que devuelve los datos de todas las películas dirigidas por un director
   * en concreto
   * @param terminoBusqueda
   * @returns array
   */
  public searchByDirector(terminoBusqueda:string): peliculasDatos[] | undefined {
    let arrayFinal:peliculasDatos[] = [];
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