import {BasicStreamableCollection} from './BasicStreamableCollection';
import {peliculasDatos} from './Interfaces';

export class Peliculas extends BasicStreamableCollection<peliculasDatos> {
  constructor(protected items:peliculasDatos[]) {
    super(items);
  }
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