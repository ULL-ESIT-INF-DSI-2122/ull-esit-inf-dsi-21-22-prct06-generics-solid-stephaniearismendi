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
  calcularAguante(): number {
    if (this.runa == 'curacion' || this.runa == 'amissio') {
      this.setAguante(this.getAguante() * 2);
    }
    return this.getAguante();
  }
  calcularPoder(): number {
    if (this.runa == 'fortis' || this.runa == 'dexteritas') {
      this.setPoder(this.getPoder() * 2);
    }
    return this.getPoder();
  }
  fraseAtacar(): string {
    let texto:string = '';
    const frasesAtacar:string[] = ['ha usado su cuchillo serafín.', 'ha golpeado en la cabeza a su rival.',
      'ha dado una patada a su rival.', 'ha lanzado un cuchillo a su rival.', 'ha usado su daga.'];
    const rand = ~~(Math.random()*frasesAtacar.length);
    texto = this.getNombre() + ' ' + frasesAtacar[rand];
    return texto;
  }
}