import { Freelancer } from './Freelancer';
import { Cliente } from './Cliente';

export class Projeto {
    private Nome: string;
    private descricao: string;
    private freelancer: Freelancer | null;
    private cliente: Cliente;
    private concluido: boolean;
  

    constructor(Nome: string, descricao: string, cliente: Cliente) {
        this.Nome = Nome;
        this.descricao = descricao;
        this.freelancer = null;
        this.cliente = cliente;
        this.concluido = false;
        
    
    }
    public getNome(): string {
        return this.Nome;
    }

    public setNome(Nome: string): void {
        this.Nome = Nome;
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

    public setFreelancer(freelancer: Freelancer): void {
        this.freelancer = freelancer;
    }

    public getCliente1(): Cliente {
        return this.cliente;
    }

    public setCliente(cliente: Cliente): void {
        this.cliente = cliente;
    }

    public marcarConcluido(): void {
        this.concluido = true;
    }

    public isConcluido(): boolean {
        return this.concluido;
    }
}
