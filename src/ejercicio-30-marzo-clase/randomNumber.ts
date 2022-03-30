/**
 * clase que implementa singleton
 */
export class RandomNumber {
  private static randomNumber: RandomNumber;
  private constructor() {
  }
  /**
   * Método para obtener la instancia
   * @returns
   */
  public static getRandomInstance():RandomNumber {
    if (!RandomNumber.randomNumber) {
      RandomNumber.randomNumber = new RandomNumber();
    }
    return RandomNumber.randomNumber;
  }
  /**
   * Método que obtiene un aleatorio flotante entre 0 y 1
   * @returns number
   */
  public getAleatorioFlotante():number {
    const numero = Math.random();
    return numero;
  }
  /**
   * Método que obtiene un aleatorio flotante entre n y m
   * @param n
   * @param m
   * @returns number
   */
  public getAleatorioFlotanteDefinido(n:number, m:number) {
    const numero = Math.random() * (m-n) + n;
    return numero;
  }
  /**
   * Método que obtiene un aleatorio entero entre n y m
   * @param n
   * @param m
   * @returns number
   */
  public getAleatorioEntero(n:number, m:number) {
    let numero = Math.random() * (m-n) + n;
    numero = Math.floor(numero);
    return numero;
  }
}