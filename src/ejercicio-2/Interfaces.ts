export type SeriesDatos = {
    year:number;
    descriptor:string;
    titulo:string;
    temporadas:number;
    director:string;
}

export type documentalDatos = {
    year:number;
    descriptor:string;
    titulo:string;
    cadena:string;
}

export type peliculasDatos = {
    year:number;
    descriptor:string;
    titulo:string;
    director:string;
    actores:string[];
}

export interface Streamable<T>{
    addItem(newItem: T):void;
    getItem(index:number):T;
    removeItem(index:number):void;
    getNumberOfITems():number;
}

export interface StreamSearch<T>{
    searchByName(terminoBusqueda: string):T[] | undefined;
    searchByYear(terminoBusqueda: number):T[] | undefined;
    searchByDescriptor(terminoBusqueda:string):T[] | undefined;
}