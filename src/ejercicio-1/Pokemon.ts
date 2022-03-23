import {Fighter} from './Fighter';
export type Ataques = [string, string]; // ataque y tipo
export class Pokemon extends Fighter {
  private type:string;
  private ataques:Ataques;
  constructor(type:string, ataques:Ataques, poder:number,
      nombre:string, altura:number, peso:number, frase:string, aguante:number) {
    super(poder, nombre, altura, peso, frase, aguante);
    this.ataques = ataques;
    this.type = type;
  }
  calcularAguante(): number {
    if (this.getAguante() < 20) {
      this.setAguante(this.getAguante() * 2);
    }
    return this.getAguante();
  }
  calcularPoder(): number {
    if (this.ataques[1] == this.type) {
      this.setPoder(this.getPoder() * 2);
    }
    return this.getPoder();
  }
  fraseAtacar(): string {
    let texto:string = '';
    texto = this.getNombre() + ' ha usado ' + this.ataques[0] + '.';
    return texto;
  }
}