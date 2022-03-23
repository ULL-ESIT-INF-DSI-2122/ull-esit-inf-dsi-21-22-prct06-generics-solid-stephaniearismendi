import {Fighter} from './Fighter';

export class Marvel extends Fighter {
  private supersoldado:boolean;
  private mutante:boolean;
  private arma?:string;
  constructor(nombre:string, poder:number, altura:number,
      peso:number, frase:string, aguante:number,
      mutante:boolean, supersoldado:boolean, arma?:string) {
    super(poder, nombre, altura, peso, frase, aguante);
    this.mutante = mutante;
    this.supersoldado = supersoldado;
    this.arma = arma;
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
  fraseAtacar(): string {
    let texto:string = '';
    const frasesAtaque:string[] = ['ha dado una patada a su rival.', 'ha lanzado un puñetazo a su rival.', 'ha golpeado el rostro de su rival.'];
    const rand = ~~(Math.random()*frasesAtaque.length);
    if (this.arma != undefined) {
      texto = this.getNombre() + ' ' + ' ha golpeado a su rival con su ' + this.arma + '.';
    } else {
      texto = this.getNombre() + ' ' + frasesAtaque[rand];
    }
    return texto;
  }
}