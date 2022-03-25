import {BasicStreamableCollection} from './BasicStreamableCollection';
import {SeriesDatos} from './Interfaces';

export class Series extends BasicStreamableCollection<SeriesDatos> {
  constructor(protected items:SeriesDatos[]) {
    super(items);
  }
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