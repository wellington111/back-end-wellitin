class Carro4 {
    marca: string;
    modelo: string;
    ano: number;


    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

    }

    descricao(): void {
        console.log(`Carro modelo: ${this.modelo}, marca: ${this.marca} do ano ${this.ano}`)
    }
}

const carro4 = new Carro4("BMW", "i8", 2024);
carro4.descricao()