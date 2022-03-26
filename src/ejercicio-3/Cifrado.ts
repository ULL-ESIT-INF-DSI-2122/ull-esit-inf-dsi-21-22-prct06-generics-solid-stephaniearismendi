/**
 * Clase que implementa la clase cifrado
 */
export class Cifrado {
  private alphabet:string[] = [];
  private clave:string;
  private texto:string;
  constructor(texto:string, clave:string, alphabet?:string[]) {
    this.texto = texto;
    this.clave = clave;
    this.alphabet = alphabet || [...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'];
  }
  /**
   * Método que toma un string y lo transforma en un array
   * @param cadena
   * @returns array de strings
   */
  public splitEnarray(cadena:string):string[] {
    const array:string[] = Array.from(cadena);
    return array;
  }
  /**
   * Método que devuelve el desplazamiento de un caracter
   * respecto al alfabeto declarado
   * @param caracter
   * @returns number
   */
  public checkDisplacement(caracter:string):number {
    const resultado:number = this.alphabet.indexOf(caracter) + 1;
    return resultado;
  }
  /**
   * Método que comprueba si la longitud de la clave es inferior
   * a la del texto, y de ser así la repite hasta que alcancen la
   * misma longitud
   */
  public checkLongClave():void {
    const claveArray:string[] = this.splitEnarray(this.clave);
    const lenghtClave:number = this.clave.length;
    let aux:number = 0;
    if (lenghtClave < this.texto.length) {
      for (let i:number = 0; i < this.texto.length - lenghtClave; i++) {
        this.clave = this.clave.concat(claveArray[aux]);
        aux++;
        if (aux >= lenghtClave) {
          aux = 0;
        }
      }
    }
  }
  /**
   * Método que desplaza el caracter según el desplazamiento pasado como
   * parámetro. Comprueba que sea menor que el tamaño del alfabeto y, de
   * ser mayor, le resta el tamaño del alfabeto
   * @param caracter
   * @param displacement
   * @returns string
   */
  public displacementCharacter(caracter:string, displacement:number):string {
    const indiceOriginal:number = this.alphabet.indexOf(caracter);
    let indexDesplazado:number = indiceOriginal + displacement;
    let desplazado:string = '';
    if (indexDesplazado >= this.alphabet.length) {
      indexDesplazado = indexDesplazado - this.alphabet.length;
      desplazado = this.alphabet[indexDesplazado];
    } else {
      desplazado = this.alphabet[indiceOriginal + displacement];
    }
    return desplazado;
  }
  /**
   * Método que desplaza el texto entero según los desplazamientos de los
   * caracteres de la clave
   * @returns string
   */
  public displacementString():string {
    let stringFinal:string = '';
    this.checkLongClave();
    for (let i = 0; i < this.texto.length; i++) {
      const displacement = this.checkDisplacement(this.clave[i]);
      stringFinal += this.displacementCharacter(this.texto[i], displacement);
    }
    return stringFinal;
  }
}