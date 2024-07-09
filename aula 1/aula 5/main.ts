
import { Guerreiro } from './Guerreiro';
import { Arqueiro } from './Arqueiro';
import { Mago } from './Mago';

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
