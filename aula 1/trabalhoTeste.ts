class rg {
    public nome: string;
    private cpf: string;
    public dataNacimento: string


    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this._cpf = cpf;
        this.dataNacimento = dataNacimento
    }

    getCpf(): string
    return this._cpf;
{
    setCpf(cpf: string): void {
        this._cpf = cpf
    }
}
}