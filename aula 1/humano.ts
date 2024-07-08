class humano {
    nome: string
    idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    aprensentar(): void {
        console.log(` olá meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }

}

class aluno extends humano {
    curso: string;

    constructor(nome: string, idade: number, curso: string) {
        super(nome, idade);
        this.curso = curso
    }
    estudar(): void {
        console.log(`${this.nome} está estudando ${this.curso}`)
    }
}

const pessoa = new humano("wellitington", 20);
pessoa.aprensentar();

const pessoa2 = new aluno("victor", 21, "programador")
pessoa2.aprensentar();
pessoa2.estudar();
