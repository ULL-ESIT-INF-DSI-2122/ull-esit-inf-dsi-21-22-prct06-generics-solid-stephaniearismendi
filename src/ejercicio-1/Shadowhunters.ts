import {Fighter} from './Fighter';

export class Shadowhunters extends Fighter {
  private runa?:string;
  constructor(poder:number, nombre:string, altura:number,
      peso:number, frase:string, aguante:number, runa?:string) {
    super(poder, nombre, altura, peso, frase, aguante);
    this.runa = runa;
  }
  public setRuna(runa:string) {
    this.runa = runa;
  }
  public getRuna():string {
    if (this.runa != undefined) {
      return this.runa;
    } else {
      return ' ';
    }
  }
  calcularAguante(): void {
    if (this.runa == 'curacion' || this.runa == 'amissio') {
      this.setAguante(this.getAguante() * 2);
    }
  }
  calcularPoder(): void {
    if (this.runa == 'fortis' || this.runa == 'dexteritas') {
      this.setPoder(this.getAguante() * 2);
    }
  }
}