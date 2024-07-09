
import { Personagem } from './Personagem';

export class Arqueiro extends Personagem {
    constructor(nome: string, vida: number, ataque: number) {
        super(nome, vida, ataque);
    }

    public ataquePreciso(): void {
        console.log(`${this.getNome()} realizou um Ataque Preciso! Causando dano crítico de ${this.getAtaque() * 2}.`);
    }
}
