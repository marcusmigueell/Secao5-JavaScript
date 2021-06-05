    //função construtora

    let Carro = function() {
        this.cor = 'Vermelho e Preto'
        this.modelo = 'Mustang'
        this.velocidadeAtual = 0
        this.velocidadeMaxima = 300

        this.acelerar = function() {

            let velocidade = this.getVelocidadeAtual() + 50

            if(velocidade > this.velocidadeMaxima) {
                velocidade = this.velocidadeMaxima
            } 

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

    console.log(`A velocidade atual do carro 1 é ${carro.getVelocidadeAtual()} km`)
    carro.acelerar()
    console.log(`A velocidade atual do carro 1 é ${carro.getVelocidadeAtual()} km`)
    carro.acelerar()
    console.log(`A velocidade atual do carro 1 é ${carro.getVelocidadeAtual()} km`)
    carro.acelerar()
    console.log(`A velocidade atual do carro 1 é ${carro.getVelocidadeAtual()} km`)
    carro.acelerar()
    console.log(`A velocidade atual do carro 1 é ${carro.getVelocidadeAtual()} km`)
    carro.acelerar()
    console.log(`A velocidade atual do carro 1 é ${carro.getVelocidadeAtual()} km`) 
    carro.acelerar()
    console.log(`A velocidade atual do carro 1 é ${carro.getVelocidadeAtual()} km`) 
    carro.acelerar()
    console.log(`A velocidade atual do carro 1 é ${carro.getVelocidadeAtual()} km`)
    carro.velocidadeMaxima = 330
    carro.acelerar()
    console.log(`A velocidade atual  do carro 1 é ${carro.getVelocidadeAtual()} km`)


    let Carro2 = function() {
        
        var velocidadeMaxima = 300
        var quilometrosRodados = 0

        this.cor = 'Vermelho e Preto'
        this.modelo = 'Mustang'
        this.velocidadeAtual = 0

        this.acelerar = function() {

            let velocidade = this.getVelocidadeAtual() + 50

            if(velocidade > velocidadeMaxima) {
                velocidade = velocidadeMaxima
            } 

            setQuilometrosRodados(0.07)
            this.setVelocidadeAtual(velocidade)
        }

        this.getVelocidadeAtual = function() {
            return this.velocidadeAtual
        }

        this.setVelocidadeAtual = function(velocidadeAtual) {
            this.velocidadeAtual = velocidadeAtual
        }

        var setQuilometrosRodados = function(q) {
            quilometrosRodados += q
        }

        this.getQuilometrosRodados = function() {
            return quilometrosRodados
        }
    }

    let carro2 = new Carro2()

    console.log(`A velocidade atual do carro 2 é ${carro2.getVelocidadeAtual()} km`)
    carro2.acelerar()
    console.log(`A velocidade atual do carro 2 é ${carro2.getVelocidadeAtual()} km`)
    carro2.acelerar()
    console.log(`A velocidade atual do carro 2 é ${carro2.getVelocidadeAtual()} km`)
    carro2.acelerar()
    console.log(`A velocidade atual do carro 2 é ${carro2.getVelocidadeAtual()} km`)
    carro2.acelerar()
    console.log(`A velocidade atual do carro 2 é ${carro2.getVelocidadeAtual()} km`)
    carro2.acelerar()
    console.log(`A velocidade atual do carro 2 é ${carro2.getVelocidadeAtual()} km`) 
    carro2.acelerar()
    console.log(`A velocidade atual do carro 2 é ${carro2.getVelocidadeAtual()} km`) 
    carro2.acelerar() 
    console.log(`A velocidade atual do carro 2 é ${carro2.getVelocidadeAtual()} km`)
    carro2.velocidadeMaxima = 330 //ao ver no console, percebemos que esse valor não foi atribuido ao carro2
    carro2.acelerar()
    console.log(`A velocidade atual do carro 2 é ${carro2.getVelocidadeAtual()} km`) 

    console.log(carro2.getQuilometrosRodados())