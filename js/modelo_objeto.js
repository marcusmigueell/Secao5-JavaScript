    //modelo de objeto

    class ContaBancaria {
        //atributos = agencia, numeroConta, saldo e limite
        constructor() {
            this.agencia = 1045
            this.numeroConta = 101525
            this.saldo = 100
            this.limite = 500
        }

        depositar(valorDeposito) {
            this.saldo += valorDeposito
        }

        sacar(valorSaque) {
            this.saldo -= valorSaque
        }

        mostrarSaldo() {
            return this.saldo
        }
    }

    let conta = new ContaBancaria()
    console.log(`Saldo inicial ${conta.mostrarSaldo()}`)
    console.log('Depositando 75')
    conta.depositar(75)
    console.log(`Saldo depois do deposito ${conta.mostrarSaldo()}`)
    console.log('Sacando 15')
    conta.sacar(15)
    console.log(`Saldo depois do saque ${conta.mostrarSaldo()}`)