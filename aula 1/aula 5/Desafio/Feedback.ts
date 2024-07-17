import { Cliente } from "./Cliente";
import { Projeto } from "./Projeto";

export class FeedBack {
    private cliente: Cliente;
    private projeto: Projeto;
    private comentario: string;
    private nota: number;

    constructor(cliente: Cliente, projeto: Projeto, comentario: string, nota: number) {
        this.cliente = cliente;
        this.projeto = projeto;
        this.comentario = comentario;
        this.nota = nota

    }
    getCliente(): Cliente {
        return this.cliente;
    }
    getProjeto(): Projeto {
        return this.projeto
    }
    getComentario(): string {
        return this.comentario
    }
    setComentario(comentario: string): void {
        this.comentario = comentario
    }
    getNota(): Number {
        return this.nota
    }
    setNota(nota: number): void {
        this.nota = nota
    }

}