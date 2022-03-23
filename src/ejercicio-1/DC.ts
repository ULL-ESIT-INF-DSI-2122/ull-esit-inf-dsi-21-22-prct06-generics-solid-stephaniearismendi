import {Fighter} from './Fighter';

export class DC extends Fighter {
  private metahumano:boolean;
  private adrenalina:boolean;
  private arma?:string;
  constructor(poder:number, nombre:string, altura:number,
      peso:number, frase:string, aguante:number,
      metahumano:boolean, adrenalina:boolean, arma?:string) {
    super(poder, nombre, altura, peso, frase, aguante);
    this.metahumano = metahumano;
    this.adrenalina = adrenalina;
    this.arma = arma;
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