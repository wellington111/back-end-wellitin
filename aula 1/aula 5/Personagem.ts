// Personagem.ts
export class Personagem {
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
