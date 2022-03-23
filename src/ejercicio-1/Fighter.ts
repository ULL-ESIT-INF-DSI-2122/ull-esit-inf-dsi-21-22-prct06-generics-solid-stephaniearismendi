export abstract class Fighter {
  private nombre:string;
  private poder:number;
  private altura:number;
  private peso:number;
  private frase:string;
  private aguante:number;
  constructor(poder:number, nombre:string, altura:number,
      peso:number, frase:string, aguante:number) {
    this.nombre = nombre;
    this.poder = poder;
    this.altura = altura;
    this.peso = peso;
    this.frase = frase;
    this.aguante = aguante;
  }
  public getPoder():number {
    return this.poder;
  }
  public getNombre():string {
    return this.nombre;
  }
  public getFrase():string {
    return this.frase;
  }
  public getAguante():number {
    return this.aguante;
  }
  public getPeso():number {
    return this.peso;
  }
  public getAltura():number {
    return this.altura;
  }
  public setAguante(aguante:number):void {
    this.aguante = aguante;
  }
  public setPoder(poder:number):void {
    this.poder = poder;
  }

abstract calcularPoder():number;
abstract calcularAguante():number;
abstract fraseAtacar():string;
}