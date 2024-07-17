import { IAvaliavel } from './IAvaliavel';
import { Freelancer } from './Freelancer';
import { Projeto } from './Projeto';
import { FeedBack } from './Feedback';

export class Avaliacao implements IAvaliavel {
    private freelancer: Freelancer;
    private projeto: Projeto;
    private nota: number;
    private feedback: FeedBack| null;

    constructor(freelancer: Freelancer, projeto: Projeto, nota: number) {
        this.freelancer = freelancer;
        this.projeto = projeto;
        this.nota = nota;
        this.feedback = null;
    }

    public adicionarFeedback(feedback: FeedBack): void {
        if (this.projeto.isConcluido()) {
            this.feedback = feedback;
        } else {
            throw new Error("O projeto deve estar concluído para adicionar feedback.");
        }
    }

    public avaliar(): void {
        if (this.projeto.isConcluido()) {
            console.log(` Nota ${this.nota}, Freelancer: ${this.freelancer.getNome()}`);
            if (this.feedback) {
                console.log(`Feedback do cliente: ${this.feedback.getComentario()}, Nota: ${this.feedback.getNota()}`);
            }
        } else {
            console.log("O projeto não está concluído, não é possível avaliar.");
        }
    }

    public getFeedback(): FeedBack | null {
        return this.feedback;
    }
}
