class veiculo {
    marca: string;
    ano: number;

    constructor(marca: string, ano: number) {
        this.marca = marca;
        this.ano = ano;
    }

    info(): void {
        console.log(`marca: ${this.marca} do ano ${this.ano}`)
    }
}
class carro extends veiculo {
    modelo: string;

    constructor(marca: string, ano: number, modelo: string) {
        super(marca, ano)
        this.modelo = modelo
    }
    detalhes(): void {
        console.log(`marca ${this.marca} ano ${this.ano} modelo ${this.modelo}`)
    }
}

const veiculo1 = new veiculo("bmw", 2020);
veiculo1.info();

const carro1 = new carro("bmw", 2020, "i8")
carro1.detalhes();
