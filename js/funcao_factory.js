    let bicicleta1 = {
        cor: 'Azul',
        marcha: 7,
        aro: 16,
        pedalar() { console.log('Método pedalar executado') }
    }

    let bicicleta2 = {
        cor: 'Branca',
        marcha: 21,
        aro: 16,
        pedalar() { console.log('Método pedalar executado') }
    }

    //console.log(bicicleta1)
    //console.log(bicicleta2)

    let BicicletaFactory = function(cor, marcha, aro) {
        return {
            cor,
            marcha,
            aro,
            pedalar() { console.log('Método pedalar executado') }
        }
    }

    let bicicletas = []

    bicicletas.push(BicicletaFactory('Azul', 7, 16))
    bicicletas.push(BicicletaFactory('Branca', 21, 26))
    bicicletas.push(BicicletaFactory('Vermelha', 18, 18))
    console.log(bicicletas)
    for (let i = 0; i < bicicletas.length; i++) bicicletas[i].pedalar()