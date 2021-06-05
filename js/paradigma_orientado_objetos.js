    //um software de marcenaria (cadeira)

    //paradigma procedural

    //cadeiras
    let cadeiras = []

    cadeiras[0] = []
    cadeiras[0]['qtd_pernas'] = 4
    cadeiras[0]['giratoria'] = false
    cadeiras[0]['cor'] = 'vermelha'

    cadeiras[1] = []
    cadeiras[1]['qtd_pernas'] = 1
    cadeiras[1]['giratoria'] = true
    cadeiras[1]['cor'] = 'azul'

    function girar_cadeira(indice) {
        if(cadeiras[indice]['giratoria'] === true) {
            console.log('girou')
        } else {
            console.log('cadeira não é giratória')
        }
    } 

    function adicionar_cadeira(qtde_pernas, giratoria, cor){
        let cadeira = []

        cadeira['qtd_pernas'] = qtde_pernas
        cadeira['giratoria'] = giratoria
        cadeira['cor'] = cor

        cadeiras.push(cadeira)
    }

    adicionar_cadeira(3, false, 'verde')

    console.log(cadeiras)

    girar_cadeira(1)

    /*------------------------------------------------------------------------------------------------------------*/

    //paradigma orientado a objetos

    //cadeiras
    class Cadeiras {
        constructor(pernas, giratoria, cor) {
            this.qtd_pernas = pernas
            this.giratoria = giratoria
            this.cor = cor
        }

        girarCadeira() {
            if(this.giratoria === true){
                console.log('girou')
            } else {
                console.log('cadeira não é giratória')
            }
        }
    }

    let cadeira = []

    cadeira.push(new Cadeiras(4, false, 'vermelha'))
    cadeira.push(new Cadeiras(1, true, 'azul'))
    
    console.log(cadeira)