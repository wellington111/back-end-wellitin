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
}

class Guerreiro extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    public golpeDuplo(): void {
        const ataqueOriginal = this.getAtaque();
        this.setAtaque(ataqueOriginal * 2);
        console.log(`${this.getNome()} usou Golpe Duplo! Ataque temporariamente aumentado para ${this.getAtaque()}`);
        this.setAtaque(ataqueOriginal); 
    }
}

class Mago extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    public bolaDeFogo(): void {
        console.log(`${this.getNome()} lançou uma bola de fogo! Causando dano na área de ${this.getAtaque() * 5}`);
    }
}

class Arqueiro extends Personagem {
    private escudo: number;

    constructor(nome: string, vida: number, ataque: number, escudo: number) {
        super(nome, vida, ataque);
        this.escudo = escudo;
    }

    public getEscudo(): number {
        return this.escudo;
    }

    public setEscudo(escudo: number): void {
        this.escudo = escudo;
    }

    public ataquePreciso(): void {
        console.log(`${this.getNome()} realizou um Ataque Preciso! Causando dano crítico de ${this.getAtaque() * 2}.`);
    }

    public usarEscudo(): void {
        console.log(`${this.getNome()} está usando o escudo para se defender! Absorvendo ${this.escudo} de dano.`);
    }
}

const guerra = new Guerreiro("Villard", 250, 50);
const forcado = new Mago("Mago", 200, 50);
const arca = new Arqueiro("Verde", 200, 50, 10);

guerra.atacar();
guerra.golpeDuplo();

forcado.atacar();
forcado.bolaDeFogo();

arca.atacar();
arca.ataquePreciso();
arca.usarEscudo();
