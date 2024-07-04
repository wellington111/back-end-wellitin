class ContaBancaria2 {
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

// Exemplo de uso
let w = new ContaBancaria2("Wellitin", 1000);
let g = new ContaBancaria2("Gabriel", 500);

contaWellitin.transferir(300, contaGabriel);  // Transferência de 300 para Gabriel
contaWellitin.transferir(800, contaGabriel);  // Tentativa de transferir 800 (saldo insuficiente)

// Exibir saldos atuais
console.log(`Saldo atual de Wellitin: R$${contaWellitin.consultarSaldo().toFixed(2)}`);
console.log(`Saldo atual de Gabriel: R$${contaGabriel.consultarSaldo().toFixed(2)}`);
