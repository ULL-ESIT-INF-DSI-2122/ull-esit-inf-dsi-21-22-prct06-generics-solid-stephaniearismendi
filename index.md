## Práctica 6 - Clases e interfaces genéricas. Principios SOLID.

En esta práctica se resolverá una serie de ejercicios de programación que nos permitirán conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también se utilizarán los principios SOLID de diseño orientado a objetos.

### Ejercicio 1 - El combate definitivo

Partiendo del desarrollo realizado para el [Ejercicio 1 de la Práctica 5](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-stephaniearismendi/tree/master/src/ejercicio-1), se supone que ahora se quieren incluir distintos tipos de contendientes a la pelea. En este caso, se valorarán los universo de Pokémon, Marvel, DC y Shadowhunters.

Para lograrlo implementaremos una clase abstracta `Fighter`, que contendrá todos los universos. Esta seguirá el siguiente esquema:

```typescript
export abstract class Fighter {
  private nombre: string;
  private poder: number;
  private altura: number;
  private peso: number;
  private frase: string;
  private aguante: number;
  private vida: number;
  constructor(
    poder: number,
    nombre: string,
    altura: number,
    peso: number,
    frase: string,
    aguante: number,
    vida: number
  ) {
    this.nombre = nombre;
    this.poder = poder;
    this.altura = altura;
    this.peso = peso;
    this.frase = frase;
    this.aguante = aguante;
    this.vida = vida;
  }
  /**
   * getters
   */
  public getPoder(): number {
    return this.poder;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public getFrase(): string {
    return this.frase;
  }
  public getAguante(): number {
    return this.aguante;
  }
  public getPeso(): number {
    return this.peso;
  }
  public getAltura(): number {
    return this.altura;
  }
  public getVida(): number {
    return this.vida;
  }
  /**
   * setters
   */
  public setAguante(aguante: number): void {
    this.aguante = aguante;
  }
  public setPoder(poder: number): void {
    this.poder = poder;
  }
  public setVida(vida: number): void {
    this.vida = vida;
  }
  /**
   * método abstracto para cacular el poder
   */
  abstract calcularPoder(): number;
  /**
   * método abstracto para calcular el aguante
   */
  abstract calcularAguante(): number;
  /**
   * método abstracto para decir las frases de los personajes
   */
  abstract fraseAtacar(): string;
}
```

En ella se ve la declaración de los atributos privados `nombre`, `poder`, `altura`, `peso`, `frase`, `aguante` y `vida`, que formarán parte del constructor. Al ser una clase abstracta, estos serán comunes a todos los universos. Además, como métodos, también comunes, tenemos los getters y los setters.

Por otra parte, están los métodos abstractos `calcularPoder`, `calcularAguante` y `fraseAtacar` que variarán según el universo. Por ello, en cada una de las clases se implementará su funcionamiento.

Seguidamente, las clases extendidas de cada universo:

- Marvel

```typescript
class Marvel extends Fighter {
  private supersoldado: boolean;
  private mutante: boolean;
  private arma?: string;
  constructor(
    nombre: string,
    poder: number,
    altura: number,
    peso: number,
    frase: string,
    aguante: number,
    vida: number,
    mutante: boolean,
    supersoldado: boolean,
    arma?: string
  ) {
    super(poder, nombre, altura, peso, frase, aguante, vida);
    this.mutante = mutante;
    this.supersoldado = supersoldado;
    this.arma = arma;
  }
  /**
   * Método que calculará el aguante, siendo x2 si
   * el personaje es un supersoldado
   * @returns number
   */
  calcularAguante(): number {
    if (this.supersoldado) {
      this.setAguante(this.getAguante() * 2);
    }
    return this.getAguante();
  }
  /**
   * Método que calculará el poder, siendo x2 si
   * el personaje es un mutante
   * @returns number
   */
  calcularPoder(): number {
    if (this.mutante) {
      this.setPoder(this.getPoder() * 2);
    }
    return this.getPoder();
  }
  /**
   * Método que retornará la frase de un personaje. Si tiene un arma declarada,
   * se añaderá en el string; de otra manera, se elegirá una aleatoria de un array
   * @returns string
   */
  fraseAtacar(): string {
    let texto: string = "";
    const frasesAtaque: string[] = [
      "ha dado una patada a su rival.",
      "ha lanzado un puñetazo a su rival.",
      "ha golpeado el rostro de su rival.",
    ];
    const rand = ~~(Math.random() * frasesAtaque.length);
    if (this.arma != undefined) {
      texto =
        this.getNombre() +
        " " +
        "ha golpeado a su rival con su " +
        this.arma +
        ".";
    } else {
      texto = this.getNombre() + " " + frasesAtaque[rand];
    }
    return texto;
  }
}
```

En esta clase se puede observar una declaración de atributos adicionales, como son los boolean de `supersoldado` y `mutante`, o el string opcional de `arma`. En el constructor aparecen los atributos generales de la clase , sumado a estos.

Además, aquí se ve la implementación de cada uno de los métodos abstractos, donde si el jugador es supersoldado el aguante se multiplicará por dos. En cambio, si es mutante, lo que se multiplicará será el poder.

Además, en `fraseAtacar` se retornará la frase de ataque, donde si se ha declarado un arma será "Capitán América ha golpeado a su rival con su escudo", por ejemplo. En caso contrario, se elegirá un string aleatorio de dentro de un array.

- Pokémon

```typescript
export type Ataques = [string, string]; // ataque y tipo

export class Pokemon extends Fighter {
  private type: string;
  private ataques: Ataques;
  constructor(
    type: string,
    ataques: Ataques,
    poder: number,
    nombre: string,
    altura: number,
    peso: number,
    frase: string,
    aguante: number,
    vida: number
  ) {
    super(poder, nombre, altura, peso, frase, aguante, vida);
    this.ataques = ataques;
    this.type = type;
  }
  /**
   * Método que calcula el aguante según la vida restante
   * del pokémon. Si es inferior a 50, se multiplicará
   * por dos.
   * @returns number
   */
  calcularAguante(): number {
    if (this.getVida() < 50) {
      this.setAguante(this.getAguante() * 2);
    }
    return this.getAguante();
  }
  /**
   * Método que calcula el poder según el tipo del
   * ataque. Si es el mismo que del pokémon, se
   * multiplicará por dos.
   * @returns number
   */
  calcularPoder(): number {
    if (this.ataques[1] == this.type) {
      this.setPoder(this.getPoder() * 2);
    }
    return this.getPoder();
  }
  /**
   * Método que devuelve el pokémon y el ataque a utilizar
   * @returns string
   */
  fraseAtacar(): string {
    let texto: string = "";
    texto = this.getNombre() + " ha usado " + this.ataques[0] + ".";
    return texto;
  }
}
```

En la clase Pokémon los atributos adicionales consiste en un type Ataque, que implementa dos strings. Uno se referirá al ataque y otro al tipo. Luego, esto servirá para que, al calcular el poder, si el tipo del ataque y el del pokémon es igual se multiplique por dos. En cambio, para el aguante, cuando la vida del poder es menor de 50 este también recibirá un bonus de x2. Es un procedimiento similar a la habilidad Mar Llamas en los iniciales de tipo fuego.

> Mar llamas aumenta la potencia de los movimientos de tipo fuego del poseedor en un 50% cuando su salud esté igual o por debajo de 1/3 de sus PS máximos.

Respecto a `fraseAtacar`, en cambio, y al igual que en los otros universos, devuelve un string con una frase de ataque. Esta esta formada, en este caso, por el nombre del pokémon y el ataque pasado por el constructor.

- DC

```typescript
class DC extends Fighter {
  private metahumano: boolean;
  private adrenalina: boolean;
  private arma?: string;
  constructor(
    poder: number,
    nombre: string,
    altura: number,
    peso: number,
    frase: string,
    aguante: number,
    vida: number,
    metahumano: boolean,
    adrenalina: boolean,
    arma?: string
  ) {
    super(poder, nombre, altura, peso, frase, aguante, vida);
    this.metahumano = metahumano;
    this.adrenalina = adrenalina;
    this.arma = arma;
  }
  /**
   * Método que, si el jugador tiene un boost de adrenalina,
   * multiplica el aguante x2
   * @returns number
   */
  calcularAguante(): number {
    if (this.adrenalina == true) {
      this.setAguante(this.getAguante() * 2);
    }
    return this.getAguante();
  }
  /**
   * Método que, si el jugador es metahumano, se multiplica
   * el poder x2
   * @returns number
   */
  calcularPoder(): number {
    if (this.metahumano) {
      this.setPoder(this.getPoder() * 2);
    }
    return this.getPoder();
  }
  /**
   * Método que devuelve la frase de ataque de un jugador. Si tiene un arma,
   * el string se forma con el mismo; en otro caso, se elige una frase aleatoria
   * de un array
   * @returns string
   */
  fraseAtacar(): string {
    let texto: string = "";
    const frasesAtaque: string[] = [
      "ha dado una patada a su rival.",
      "ha lanzado un puñetazo a su rival.",
      "ha golpeado el rostro de su rival.",
    ];
    const rand = ~~(Math.random() * frasesAtaque.length);
    if (this.arma != undefined) {
      texto =
        this.getNombre() +
        " " +
        "ha golpeado a su rival con su " +
        this.arma +
        ".";
    } else {
      texto = this.getNombre() + " " + frasesAtaque[rand];
    }
    return texto;
  }
}
```

Esta clase es similar a la de marvel, implementandose dos atributos booleanos `metahumano` y `adrenalina`, además del opcional `arma`. Si es metahumano, entonces en la función `calcularPoder` se multiplicará el poder de ataque x2. En cambio, si tiene un boost de adrenalina lo que se multiplicará por dos será el aguante.

Finalmente, `fraseAtacar` tiene un funcionamiento igual al del universo Marvel, donde devuelve un string aleatorio o no según tenga un arma declarada.

- Shadowhunters

```typescript
class Shadowhunters extends Fighter {
  private runa?: string;
  constructor(
    poder: number,
    nombre: string,
    altura: number,
    peso: number,
    frase: string,
    aguante: number,
    vida: number,
    runa?: string
  ) {
    super(poder, nombre, altura, peso, frase, aguante, vida);
    this.runa = runa;
  }
  /**
   * Setter
   * @param runa
   */
  public setRuna(runa: string): void {
    this.runa = runa;
  }
  /**
   * getter
   * @returns string
   */
  public getRuna(): string | undefined {
    if (this.runa != undefined) {
      return this.runa;
    } else {
      return undefined;
    }
  }
  /**
   * Método que calcula el aguante de un personaje del universo
   * Shadowhunters. Si lleva una runa de curación o amissio, el
   * aguante se multiplicará x2
   * @returns number
   */
  calcularAguante(): number {
    if (this.runa == "curacion" || this.runa == "amissio") {
      this.setAguante(this.getAguante() * 2);
    }
    return this.getAguante();
  }
  /**
   * Método que calcula el poder de un personaje del universo
   * Shadowhunters. Si lleva una runa fortis o dexteritas, el
   * poder se multiplicará x2
   * @returns number
   */
  calcularPoder(): number {
    if (this.runa == "fortis" || this.runa == "dexteritas") {
      this.setPoder(this.getPoder() * 2);
    }
    return this.getPoder();
  }
  /**
   * Método que devuelve la frase de ataque aleatoriamente de los
   * strings de un array
   * @returns string
   */
  fraseAtacar(): string {
    let texto: string = "";
    const frasesAtacar: string[] = [
      "ha usado su cuchillo serafín.",
      "ha golpeado en la cabeza a su rival.",
      "ha dado una patada a su rival.",
      "ha lanzado un cuchillo a su rival.",
      "ha usado su daga.",
    ];
    const rand = ~~(Math.random() * frasesAtacar.length);
    texto = this.getNombre() + " " + frasesAtacar[rand];
    return texto;
  }
}
```

En este universo la diferencia de poder o aguante dependerá de las runas. Una runa, para los shadowhunters, es una marca en la piel (como un tatuaje) que le proporciona habilidades adicionales. Estas pueden ir desde visión nocturna, resistencia, curación hasta más poder.

En este caso, si el shadowhunter tiene una runa **fortis** o **dexteritas**, su poder aumentará x2. En cambio, si tiene una runa **curacion** o **amissio** se duplicará su resistencia.

En este universo el método `fraseAtacar` devolverá siempre un string aleatorio de un array.

Además, todos los personajes creados en los distintos universos pertenecerán a una Base de Datos. Esta está implementada en la clase `BaseDeDatos`.

```typescript
class BaseDeDatos {
  private baseDeDatos: Fighter[] = [];
  constructor(baseDeDatos: Fighter[]) {
    this.baseDeDatos = baseDeDatos;
  }
  /**
   * Método para introducir en la base de datos a un nuevo participante
   * @param participante
   * @returns texto
   */
  public insertarParticipante(participante: Fighter): string {
    const texto: string = "Participante introducido";
    this.baseDeDatos.push(participante);
    return texto;
  }
  /**
   * Método para mostrar por pantalla una tabla con todos los participantes
   * de los distintos universos y sus respectivos atributos
   */
  public mostrarBaseDeDatos(): void {
    console.table(this.baseDeDatos);
  }
  /**
   * Método para obtener los datos del personaje en un índice
   * @param index
   * @returns
   */
  public getPersonaje(index: number): Fighter {
    return this.baseDeDatos[index];
  }
}
```

En esta, el constructor recibirá un array de personajes de los diferentes universos (pertenecientes a la clase abstracta `Fighter`), y los introducirá en la base de datos. Como métodos tiene `mostrarBaseDeDatos`, que imprimirá por pantalla una tabla con todos los personajes pertenecientes así como sus distintos atributos, y `getPersonaje`, que retornará el objeto de personaje que esté en el indice indicado. También está `inserarParticipante`, que añadirá un nuevo personaje a la base de datos, retornando un array informando de que el proceso se ha completado correctamente.

Finalmente, todo tendrá lugar en la clase `Combat`.

```typescript

class Combat {
  private Oponente1:Fighter;
  private Oponente2:Fighter;
  constructor(Oponente1:Fighter, Oponente2:Fighter) {
    this.Oponente1 = Oponente1;
    this.Oponente2 = Oponente2;
  }

```

Esta clase cuenta con muchos más métodos, así que se profundizará en ellos uno a uno.

- decirFrases

```typescript

  public decirFrases():string[] {
    const frases:string[] = [' ', ' '];
    frases[0] = this.Oponente1.getFrase();
    frases[1] = this.Oponente2.getFrase();
    return frases;
  }
  ```

Este método sirve para retornar las frases de ambos oponentes en un array.

- mostrarAtributos

```typescript

  public mostrarAtributos():void {
    const Oponentes: Fighter[] = [this.Oponente1, this.Oponente2];
    console.log('A continuación se mostrarán las características de ambos adversarios.');
    console.table(Oponentes);
  }

  ```

  Este método sirve para imprimir por pantalla las características de ambos oponentes. Similar al `mostrarAtributos` de la clase `BasesdeDatos`, pero únicamente con los combatientes.

  - Eficacia

```typescript

    public eficacia(rival:number):number {
    let eficacia:number;
    if (rival == 1) {
      eficacia = this.Oponente1.getPoder() * (100 - this.Oponente2.getAguante()) / 100;
    } else if (rival == 2) {
      eficacia = this.Oponente2.getPoder() * (100 - this.Oponente1.getAguante()) / 100;
    } else {
      eficacia = 0;
    }
    return eficacia;
  }

```

Este método sirve para calcular la eficacia según la fórmula:

> Damage = Attack * ( 100 - defense) / 100.

El parametro `rival` indica el oponente que está atacando.

- damageGenerado

```typescript

  public damageGenerado(oponenteDamaged:Number):void {
    if (oponenteDamaged == 1) {
      this.Oponente2.setVida(this.Oponente2.getVida() - this.eficacia(1));
    } else if (oponenteDamaged == 2) {
      this.Oponente1.setVida(this.Oponente1.getVida() - this.eficacia(2));
    }
  }

```

Este método sirve para actualizar la vida de los oponentes utilizando el método anterior. En este caso, `òponentDamaged` representa al oponente que ha sido dañado. Es decir, no el que haya realizado el ataque.

- comprobarRendicion

```typescript

  public comprobarRendicion(Oponente:Fighter):string {
    let texto:string = ' ';
    if (Oponente.getVida() <= 0) {
      texto = Oponente.getNombre() + ' se ha rendido.';
    }
    return texto;
  }

```

Este método comprueba si el oponente pasado como parametro tiene una vida igual o inferior a cero y, en caso de cummpliur la condición, retorna "X se ha rendido". En caso contrario, retorna un string vacío.

- battle

```typescript
  public battle(Oponente:Fighter, numero:number):void {
    console.log(Oponente.fraseAtacar());
    this.damageGenerado(numero);
  }
```

Sirve para sacar por pantalla el ataque del jugador pasado por parametro, además de generar el daño.

- getAguanteRestante

```typescript

  public getAguanteRestante(Oponente:Fighter):string {
    const texto = 'A ' + Oponente.getNombre() + ' le queda ' + Oponente.getVida() + ' de vida.';
    return texto;
  }

```

Método auxiliar que imprime por pantalla cuánta vida le queda al oponente pasado como parámetro.

- enApuros

```typescript

  public enApuros(Oponente:Fighter):boolean {
    let used:boolean = false;
    if (Oponente.getVida() < 50) {
      Oponente.calcularAguante();
      Oponente.calcularPoder();
      used = true;
    }
    return used;
  }

```

Método que, si la vida del jugador es menor a 50, implementa los diferentes combos. Además, activa retorna el booleano `used` si se ha entrado en el if.

- start

```typescript

  public start():void {
    let iter:number = 1;
    let bonusoponente1:boolean = true;
    let bonusoponente2:boolean = true;
    console.log('La batalla está a punto de empezar.');
    while ((this.Oponente1.getVida()) > 0 && (this.Oponente2.getVida()) > 0) {
      if (iter > 2) {
        iter = 1;
      }
      if (iter == 1) {
        this.battle(this.Oponente1, iter);
        if (this.comprobarRendicion(this.Oponente2) != ' ') {
          console.log(this.comprobarRendicion(this.Oponente2));
        } else {
          console.log(this.getAguanteRestante(this.Oponente2));
          if (bonusoponente2 == true) {
            if (this.enApuros(this.Oponente2)) {
              bonusoponente2 = false;
            }
          }
        }
      } else if (iter == 2) {
        this.battle(this.Oponente2, iter);
        if (this.comprobarRendicion(this.Oponente1) != ' ') {
          console.log(this.comprobarRendicion(this.Oponente1));
        } else {
          console.log(this.getAguanteRestante(this.Oponente1));
          if (bonusoponente1 == true) {
            if (this.enApuros(this.Oponente1)) {
              bonusoponente1 = false;
            }
          }
        }
      }
      iter++;
    }
  }

```

Contiene el funcionamiento general del combate. Se van alternando las distintas funciones que se repetirán mientras ambos oponentes tengan una vida superior a 0. La variable `iter` sirve para pasar por pantalla a las funciones que necesitan el atacante para diferenciar entre el Oponente1 o el Oponente2. Además, siempre que pase de 2 se reiniciará a 1, para que solo tenga en cuenta los escenarios posibles.