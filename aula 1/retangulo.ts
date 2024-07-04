
class Retangulo {

    largura: number;
    altura: number;


    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }


    calcularArea(): number {
        let area:number = this.largura * this.altura;
        return area;
    }
}

const retangulo = new Retangulo(3, 5);
console.log(`Area é de: ${retangulo.calcularArea()} mm`);
