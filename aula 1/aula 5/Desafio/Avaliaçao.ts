import { IAvaliavel } from './IAvaliavel';
import { Freelancer } from './Freelancer';
import { Projeto } from './Projeto';

export class Avaliacao implements IAvaliavel {
    private freelancer: Freelancer;
    private projeto: Projeto;
    private nota: number;

    constructor(freelancer: Freelancer, projeto: Projeto, nota: number) {
        this.freelancer = freelancer;
        this.projeto = projeto;
        this.nota = nota;
    }

    public avaliar(): void {
        console.log(`Avaliando o freelancer ${this.freelancer.getNome()} no projeto ${this.projeto.getTitulo()} com nota ${this.nota}.`);
    }
}
