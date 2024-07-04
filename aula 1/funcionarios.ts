class Funcionario {
    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    aumentarSalario(percentualAumento: number): void {
        const aumento = this.salario * (percentualAumento / 100);
        this.salario += aumento;
    }

    exibirSalarioAtual(): void {
        console.log(`Novo salário de ${this.nome} (${this.cargo}): R$ ${this.salario.toFixed(2)}`);
    }
}

let funcionario1 = new Funcionario('Wellitin', 'Programador', 3500);

console.log(`Salário atual de ${funcionario1.nome} (${funcionario1.cargo}): R$ ${funcionario1.salario.toFixed(2)}`);

funcionario1.aumentarSalario(20);
funcionario1.exibirSalarioAtual(); 