import {BasicStreamableCollection} from './BasicStreamableCollection';
import {documentalDatos} from './Interfaces';

export class Documentales extends BasicStreamableCollection<documentalDatos> {
  constructor(protected items:documentalDatos[]) {
    super(items);
  }
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