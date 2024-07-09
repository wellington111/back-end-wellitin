
import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
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
