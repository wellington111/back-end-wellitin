import { Freelancer } from './Freelancer';

export class Projeto {
    private titulo: string;
    private descricao: string;
    private freelancer: Freelancer | null;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.freelancer = null;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getFreelancer(): Freelancer | null {
        return this.freelancer;
    }

    public atribuirFreelancer(freelancer: Freelancer): void {
        this.freelancer = freelancer;
        freelancer.adicionarProjeto(this);
    }

    public desatribuirFreelancer(): void {
        if (this.freelancer) {
            this.freelancer.removerProjeto(this.titulo);
            this.freelancer = null;
        }
    }

    public getNome(): string {
        return this.titulo;
    }
}
