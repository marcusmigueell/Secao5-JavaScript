    //função construtora

    let Carro = function() {
        this.cor = 'Vermelho'
        this.modelo = 'Mustang'
        this.velocidadeAtual = 0
        this.velocidadeMaxima = 300

        this.acelerar = function() {
            let velocidade = this.getVelocidadeAtual() + 10
            this.setVelocidadeAtual(velocidade)
        }

        this.getVelocidadeAtual = function() {
            return this.velocidadeAtual
        }

        this.setVelocidadeAtual = function(velocidadeAtual) {
            this.velocidadeAtual = velocidadeAtual
        }
    }

    let carro = new Carro()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    console.log(`A velocidade atual é ${carro.getVelocidadeAtual()} km`) 