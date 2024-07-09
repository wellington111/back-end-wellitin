class Personagem {
    private nome: string;
    private vida: number;
    private ataque: number;

    constructor(nome: string, vida: number, ataque: number) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
    }

    public getNome(): string {
        return this.nome;
    }
    
    public getVida(): number {
        return this.vida;
    }
    
    public getAtaque(): number {
        return this.ataque;
    }
    
    public setNome(nome: string): void {
        this.nome = nome;
    }
    
    public setVida(vida: number): void {
        this.vida = vida;
    }
    
    public setAtaque(ataque: number): void {
        this.ataque = ataque;
    }

    public atacar(): void {
        console.log(`${this.nome} atacou com ${this.ataque} de dano!`);
    }

    public receberDano(dano: number): void {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
    }
}

class Guerreiro extends Personagem {
    private escudo: number;

    constructor(nome: string, vida: number, ataque: number, escudo: number) {
        super(nome, vida, ataque);
        this.escudo = escudo;
    }

    public usarEscudo(dano: number): number {
        const danoReduzido = dano * 0.25;
        const danoEfetivo = dano - danoReduzido;
        const vidaAbsorvida = danoReduzido * 0.10;
        this.receberDano(danoEfetivo);
        this.setVida(this.getVida() + vidaAbsorvida);
        console.log(`${this.getNome()} usou o escudo. Dano recebido: ${danoEfetivo}, vida absorvida: ${vidaAbsorvida}`);
        return danoEfetivo;
    }
}

class Arqueiro extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    public ataquePreciso(): void {
        console.log(`${this.getNome()} realizou um Ataque Preciso! Causando dano crítico de ${this.getAtaque() * 2}.`);
    }
}

class Mago extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    public bolaDeFogo(): void {
        console.log(`${this.getNome()} lançou uma bola de fogo! Causando dano de ${this.getAtaque()}`);
    }
}

const guerreiro = new Guerreiro("Elvis", 250, 20, 30);
const arqueiro = new Arqueiro("Robin", 250, 40);
const mago = new Mago("Orion", 250, 40);


console.log("Arqueiro ataca Guerreiro");
const danoArqueiro = arqueiro.getAtaque();
guerreiro.usarEscudo(danoArqueiro);

console.log("Mago ataca Guerreiro");
const danoMago = mago.getAtaque();
guerreiro.receberDano(danoMago);


console.log(`Vida final do ${guerreiro.getNome()}: ${guerreiro.getVida()}`);
console.log(`Vida final do ${arqueiro.getNome()}: ${arqueiro.getVida()}`);
console.log(`Vida final do ${mago.getNome()}: ${mago.getVida()}`);