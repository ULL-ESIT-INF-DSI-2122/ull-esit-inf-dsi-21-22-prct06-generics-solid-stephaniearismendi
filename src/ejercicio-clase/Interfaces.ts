/**
 * Interfaz que añade, devuelve, borra y cuenta cuantos
 * items hay
 */
export interface Collectable<T>{
    addItem(newItem: T):void;
    getItem(index:number):T;
    removeItem(index:number):void;
    getNumberOfITems():number;
}

/**
 * Interfaz que busca un item
 */
export interface Searchable<T>{
    search(terminoBusqueda: T):T[] | undefined;
}