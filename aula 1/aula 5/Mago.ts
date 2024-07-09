
import { Personagem } from './Personagem';

export class Mago extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    public bolaDeFogo(): void {
        console.log(`${this.getNome()} lançou uma bola de fogo! Causando dano de ${this.getAtaque()}`);
    }
}
