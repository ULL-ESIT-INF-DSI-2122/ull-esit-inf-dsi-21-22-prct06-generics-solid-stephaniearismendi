import {Fighter} from './Fighter';

export class DC extends Fighter {
  private metahumano:boolean;
  private adrenalina:boolean;
  constructor(poder:number, nombre:string, altura:number,
      peso:number, frase:string, aguante:number,
      metahumano:boolean, adrenalina:boolean) {
    super(poder, nombre, altura, peso, frase, aguante);
    this.metahumano = metahumano;
    this.adrenalina = adrenalina;
  }
  calcularAguante(): void {
    if (this.adrenalina == true) {
      this.setAguante(this.getAguante() * 2);
    }
  }
  calcularPoder(): void {
    if (this.metahumano) {
      this.setPoder(this.getPoder() * 2);
    }
  }
}