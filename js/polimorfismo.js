    //Polimorfismo

    class Animal {
        constructor(cor, tamanho){
            this.cor = cor
            this.tamanho = tamanho + ' cm'
        }

        dormir(){
            console.log('Dormindo')
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

    class Avestruz extends Passaro {
        constructor(bico, cor, tamanho) {
            super(bico, cor, tamanho)
        }

        enterrarCabeça() {
            console.log('Esconderijo')
        }

        voar(){ //aqui acontece o polimorfismo - sobrescrita de método
            console.log('Não sabe voar')
        }
    }

    let papagaio = new Papagaio(true, 'Médio', 'Verde e Amarelo', 25)

    console.log(papagaio)
    papagaio.voar()
    
    let avestruz = new Avestruz('Grande', 'Branco e Preto', 250)

    console.log(avestruz)
    avestruz.voar()