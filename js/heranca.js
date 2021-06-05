    //Herança

    class Animal {
        constructor(cor, tamanho){
            this.cor = cor
            this.tamanho = tamanho + ' cm'
        }

        dormir(){
            console.log('Dormindo')
        }
    }


    class Cachorro extends Animal {
        constructor(){
            super('Branco e Marrom', 30)
            this.orelhas = 'Grandes e caídas'
        }

        correr(){
            console.log('Correndo')
        }

        rosnar(){
            console.log('Rosnando')
        }
    }


    class Passaro extends Animal {
        constructor(bico, cor, tamanho){
            super(cor, tamanho)
            this.bico = bico
        }

        voar(){
            console.log('Voando')
        }
    }


    class Papagaio extends Passaro {
        constructor(sabeFalar, bico, cor, tamanho){
            super(bico, cor, tamanho)
            this.sabeFalar = sabeFalar
        }

        falar() {
            console.log('Falando')
        }
    }


    let cachorro = new Cachorro()
    let passaro = new Passaro()
    let papagaio = []
    papagaio.push(new Papagaio(true, 'Médio', 'Verde e Amarelo', 25))
    papagaio.push(new Papagaio(false, 'Curto', 'Azul', 30))
    

    console.log(cachorro)
    console.log(passaro)
    console.log(papagaio)

    cachorro.dormir()
    passaro.dormir()
    papagaio[0].falar()
    papagaio[0].dormir()
    papagaio[0].voar()