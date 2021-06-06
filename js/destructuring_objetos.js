    //destructuring em Objetos

    let produto = {
        descricao: 'Notebook',
        preco: 2200,
        detalhes: {
            fabricante: 'abc',
            modelo: 'xyz'
        }
    }

    let { descricao, preco } = produto
    console.log(descricao, preco)

    let { descricao: d, preco: p} = produto
    console.log(d, p)

    let { descricao: a, preco: b, desconto = 5} = produto
    console.log(a, b, desconto)

    let { detalhes: {fabricante: f, modelo, ano = '2021'} } = produto
    console.log(f, modelo, ano)