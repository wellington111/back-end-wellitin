import { Pessoa } from './Pessoa';
import { Projeto } from './Projeto';


export class Freelancer extends Pessoa  {
    private areaDeEspecializacao: string;
    private projetos: Projeto[];

    constructor(nome: string, email: string, areaDeEspecializacao: string) {
        super(nome, email);
        this.areaDeEspecializacao = areaDeEspecializacao;
        this.projetos = [];
    }

    public getAreaDeEspecializacao(): string {
        return this.areaDeEspecializacao;
    }

    public setAreaDeEspecializacao(areaDeEspecializacao: string): void {
        this.areaDeEspecializacao = areaDeEspecializacao;
    }

    public adicionarProjeto(projeto: Projeto): void {
        this.projetos.push(projeto);
    }

    public removerProjeto(nomeProjeto: string): void {
        this.projetos = this.projetos.filter(projeto => projeto.getNome() !== nomeProjeto);
    }

    public listarProjetos(): Projeto[] {
        return this.projetos;
    }

    public obterTipo(): string {
        return "Freelancer";
    }

    
    
}
