    //Objeto Literal

    //Orientado a objeto
    class Produto {
        constructor(descricao, preco){
            this.descricao = descricao
            this.preco = preco
        }

        verDescricao(){
            console.log(`${this.descricao} por apenas ${this.preco}`)
        }
    }

    let produto = new Produto('Notebook', 2200)
    produto.verDescricao()


    //Objeto literal
    let produtoLiteral = {
        descricao: 'Geladeira',
        preco: 1500,
        
        verDescricao: function(){
            console.log(`${this.descricao} por apenas ${this.preco}`)
        }
    }

    produtoLiteral.verDescricao()


    //melhorias do objeto literal

    let nome = 'Marcus'
    let idade = 31
    let sexo = 'Masculino'
    let profissao = 'Programador'

    let objeto = {
        nome: nome,
        idade: idade,
        sexo: sexo,
        profissao: profissao,
        exibirResumo: function(){
            console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
        }
    }

    objeto.exibirResumo()

    let objetoMelhorado = {
        nome,  // nome = nome variável / valor = valor da variável
        idade,
        sexo,
        profissao,
        exibirResumo() {
            console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
        }
    }

    objetoMelhorado.exibirResumo()


    //Modificando valores do objeto literal e criação dinâmica de pares nome/valor

    let pessoa = {
        nome: 'Marcus',
        idade: 31
    }

    console.log(pessoa)

    pessoa.nome = 'Adriana'
    pessoa.idade = 26

    console.log(pessoa)

    pessoa.sexo = 'Feminino'
    pessoa.dizerOi = () => console.log('Olá, tudo bem?')

    console.log(pessoa)
    pessoa.dizerOi()