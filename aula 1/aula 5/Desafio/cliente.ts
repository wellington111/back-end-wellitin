import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
    constructor(nome: string, email: string) {
        super(nome, email);
    }
    obterTipo(): string {
        return 'Cliente';
    }
}