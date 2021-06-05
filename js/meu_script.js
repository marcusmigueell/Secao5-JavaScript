    //aviao
    //atributos cor e modelo; método levantarVoo

    //Objeto literal
    let aviaoL = {
        cor: 'Cinza',
        modelo: 'Airbus A380',
        levantarVoo: function() { console.log('Levantando Voo') }
    }

    //Função construtora
    let AviaoF = function() {
        this.cor = 'Branco'
        this.modelo = 'Boeing 787'
        this.levantarVoo = function() { console.log('Levantando Voo') }
    }

    let aviaoF = new AviaoF()

    //classe
    class AviaoC {
        constructor() {
            this.cor = 'Azul'
            this.modelo = 'Embraer'
        }

        levantarVoo() {
            console.log('Levantando Voo')
        }
    }

    let aviaoC = new AviaoC()

    console.log(aviaoL)
    console.log(aviaoF)
    console.log(aviaoC)

    Object.prototype.attr50 = 'X'   //cuidado

    let animal = { attr1: 'a' }
    let vertebrado = { __proto__: animal, attr2: 'b' }
    let ave = { __proto__: vertebrado, attr3: 'c' }

    console.log(ave.attr3, ave.attr2, ave.attr1, ave.attr50)