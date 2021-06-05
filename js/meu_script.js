/*

    //modelo de objeto

    class ContaBancaria {
        //atributos = agencia, numeroConta, saldo e limite
        constructor() {
            this.agencia = 1045
            this.numeroConta = 101525
            this.saldo = 100
            this.limite = 500
        }

        depositar(valorDeposito) {
            this.saldo += valorDeposito
        }

        sacar(valorSaque) {
            this.saldo -= valorSaque
        }

        mostrarSaldo() {
            return this.saldo
        }
    }

    let conta = new ContaBancaria()
    console.log(`Saldo inicial ${conta.mostrarSaldo()}`)
    console.log('Depositando 75')
    conta.depositar(75)
    console.log(`Saldo depois do deposito ${conta.mostrarSaldo()}`)
    console.log('Sacando 15')
    conta.sacar(15)
    console.log(`Saldo depois do saque ${conta.mostrarSaldo()}`)

*/

/*

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

    // --------------------------------------------------------------------------------------------------------------------------- 

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

*/

/*

    //Encapsulamento

    class Tv {
        constructor() {
            this._relacaoCanais = Array(2, 4, 5, 7, 10)  // o underline (_) no começo significa que a variavel é privada
            this._canalAtivo = 5
            this._volume = 5
        }

        set relacaoCanais(novoCanal){
            this._relacaoCanais = novoCanal
        }

        get relacaoCanais() {
            return this._canalAtivo
        }

        set canalAtivo(canal){
            let x = this._relacaoCanais.indexOf(canal)
            if (x === -1) {
                console.log('canal inexistente')
            } else {
                this._canalAtivo = canal
            }
            
        }

        get canalAtivo() {
            return this._canalAtivo
        }

        set volume(valor){
            this._volume = valor
        }

        get volume() {
            return this._canalAtivo
        }
    }

    let tv = new Tv()
    tv.canalAtivo = 3
    console.log(tv.canalAtivo)

*/

/*

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
    

    //console.log(cachorro)
    //console.log(passaro)
    console.log(papagaio)

    //cachorro.dormir()
    //passaro.dormir()
    //papagaio.falar()
    //papagaio.dormir()
    //papagaio.voar()

*/

/*

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

*/

/*

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

*/