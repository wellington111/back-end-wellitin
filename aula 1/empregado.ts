class empregado {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome
    this.salario = salario
  }

  trabalhar(): void {
    console.log(`${this.nome} está trabalhando!`)
  }
}
class Gerente extends empregado {
  departamento: string;


  constructor(nome: string, salario: number, departamento: string) {
    super(nome, salario);
    this.departamento = departamento;
  }

  trabalhar(): void {
    (`${this.nome} está trabalhando no departamento ${this.departamento}`)

  }
  supervisonar(): void {
    console.log(`${this.nome} está supervisionando o departamento ${this.departamento}`);

  }
}

const empregado1 = new empregado("wellitin", 2000)
empregado1.trabalhar();


const gerente1 = new Gerente("gabriel", 5000, "programador")
gerente1.trabalhar();
gerente1.supervisonar()


const gerente = new Gerente("Carlos", 5000, "Vendas");
gerente.trabalhar();



