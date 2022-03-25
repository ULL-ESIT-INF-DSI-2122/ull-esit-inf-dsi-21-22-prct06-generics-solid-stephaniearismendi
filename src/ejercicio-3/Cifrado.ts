export class Cifrado {
  private alphabet:string[] = [...'abcdefghijklmnopqrstuvwxyz'];
  private clave:string;
  private texto:string;
  constructor(texto:string, clave:string) {
    this.texto = texto;
    this.clave = clave;
  }
  public splitEnarray(cadena:string):string[] {
    const array:string[] = Array.from(cadena);
    return array;
  }
  public checkDisplacement(caracter:string):number {
    const resultado:number = this.alphabet.indexOf(caracter) + 1;
    return resultado;
  }
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
  public displacementCharacter(caracter:string, displacement:number):string {
    const indiceOriginal:number = this.alphabet.indexOf(caracter);
    const desplazado:string = this.alphabet[indiceOriginal + displacement];
    return desplazado;
  }
}