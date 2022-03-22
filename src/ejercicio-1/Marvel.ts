import {Fighter} from './Fighter';

export class Marvel extends Fighter {
  private supersoldado:boolean;
  private mutante:boolean;
  constructor(nombre:string, poder:number, altura:number,
      peso:number, frase:string, aguante:number,
      mutante:boolean, supersoldado:boolean) {
    super(poder, nombre, altura, peso, frase, aguante);
    this.mutante = mutante;
    this.supersoldado = supersoldado;
  }
  calcularAguante(): void {
    if (this.supersoldado) {
      this.setAguante(this.getAguante() * 2);
    }
  }
  calcularPoder():void {
    if (this.mutante) {
      this.setPoder(this.getPoder() * 2);
    }
  }
}