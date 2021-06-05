
    //contexto spread = espalhar dados

    //string
    let tituloArtigo = 'Como utilizar o operador rest/spread'

    console.log(tituloArtigo)
    console.log(...tituloArtigo)
    console.log([...tituloArtigo])

    //arrays
    let listaCursos1 = ['NodeJS e MongoDB', 'ES6, TypeScript e Angular 4']
    let listaCursos2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux']
    let listaCursosCompleto = [...listaCursos1, 'Web Completo', 'Android Completo', ...listaCursos2] // pode usar o spread onde quiser, ou seja, começo, meio e fim.    

    console.log(listaCursosCompleto)

    //objetos
    let pessoa = { nome: 'João', idade: 35 }
    let clone = {...pessoa, endereco: 'Rua X'}

    console.log(clone) 


    //contexto rest = juntar dados usados em funções

    function soma(...param){
        let resultado = 0

        console.log(param)

        param.forEach(v => resultado += v)

        return resultado
    }

    console.log(soma(3, 8, 5, 7))

    function multiplicacao(m, ...p) {
        console.log(m)
        let resultado = 0
        console.log(p)

        p.forEach(v => resultado += m * v)

        return resultado
    }

    console.log(multiplicacao(5, 7, 12, 3, 49))