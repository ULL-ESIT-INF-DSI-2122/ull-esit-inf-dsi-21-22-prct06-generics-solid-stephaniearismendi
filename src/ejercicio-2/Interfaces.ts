/**
 * Tipo que declara todos los atributos
 * que definirán las Series
 */
export type SeriesDatos = {
    year:number;
    descriptor:string;
    titulo:string;
    temporadas:number;
    director:string;
}

/**
 * Tipo que declara todos los atributos
 * que definirán los Documentales
 */
export type documentalDatos = {
    year:number;
    descriptor:string;
    titulo:string;
    cadena:string;
}

/**
 * Tipo que declarará todos los atributos
 * que definirán las Películas
 */
export type peliculasDatos = {
    year:number;
    descriptor:string;
    titulo:string;
    director:string;
    actores:string[];
}

/**
 * Interfaz que declarará los métodos de manipulación de
 * Items
 */
export interface Streamable<T>{
    addItem(newItem: T):void;
    getItem(index:number):T;
    removeItem(index:number):void;
    getNumberOfITems():number;
}

/**
 * Interfaz que declarará los métodos de búsqueda generales
 * de los Items
 */
export interface StreamSearch<T>{
    searchByName(terminoBusqueda: string):T[] | undefined;
    searchByYear(terminoBusqueda: number):T[] | undefined;
    searchByDescriptor(terminoBusqueda:string):T[] | undefined;
}