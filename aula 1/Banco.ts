  class ContaBancaria {
    private saldo: number;
    private titular: string;

    constructor(titular: string, saldoInicial: number = 0) {
      this.saldo = saldoInicial;
      this.titular = titular;
    }

    depositar(valor: number): void {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
      } else {
        console.log("O valor do depósito deve ser positivo.");
      }
    }

    sacar(valor: number): void {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
      } else if (valor <= 0) {
        console.log("O valor do saque deve ser positivo.");
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    }

    transferir(valor: number, contaDestino: ContaBancaria): void {
      if (valor > 0 && valor <= this.saldo) {
        this.sacar(valor);
        contaDestino.depositar(valor);
        console.log(`Transferência de R$${valor.toFixed(2)} para ${contaDestino.titular} realizada com sucesso.`);
        console.log(`Saldo de Wellitin após transferência: R$${this.consultarSaldo().toFixed(2)}`);
      } else if (valor <= 0) {
        console.log("O valor da transferência deve ser positivo.");
      } else {
        console.log("Saldo insuficiente para transferência.");
      }
    }

    consultarSaldo(): number {
      return this.saldo;
    }
  }

  let contaWellitin = new ContaBancaria("Wellitin", 520);
  let contaGabriel = new ContaBancaria("Gabriel", 1);

  contaWellitin.transferir(500, contaGabriel);

  console.log(`Saldo atual de Gabriel: R$${contaGabriel.consultarSaldo().toFixed(2)}`);
