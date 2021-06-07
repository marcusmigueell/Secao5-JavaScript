    class Despesa {
        constructor(ano, mes, dia, tipo, descricao, valor) {
            this.ano = ano
            this.mes = mes
            this.dia = dia
            this.tipo = tipo
            this.descricao = descricao
            this.valor = valor
        }

        validarDados(){
            for(let desp in this){
                if(this[desp] == undefined || this[desp] == '' || this[desp] == null) {
                    return false
                }
            }
            return true
        }
    }

    class Bd {

        constructor() {

            let id = localStorage.getItem('id') 

            if (id === null){
                localStorage.setItem('id', 0)
            }

        }

        getProximoId() {
            let proximoId = localStorage.getItem('id')
            return parseInt(proximoId) + 1
        }

        gravar(despesas){
            
            let id = this.getProximoId()

            localStorage.setItem(id, JSON.stringify(despesas))

            localStorage.setItem('id', id)
        }

        recuperarTodosRegistros() {

            //array de despesas
            let despesas = Array()

            let id = localStorage.getItem('id')

            //recuperar todas as despesas cadastradas em localStorage
            for(let i = 1; i <= id; i++){

                //recuperar a despesa
                let despesa = JSON.parse(localStorage.getItem(i))

                //verificar se existe a possibilidade de haver indices que foram pulados/removidos
                if(despesa === null) {
                    continue
                }
                    
                despesas.push(despesa)
            }

            return despesas
        }
    }

    let bd = new Bd()
    
    
    function cadastrarDespesa() {
        
        let ano = document.getElementById('ano')
        let mes = document.getElementById('mes')
        let dia = document.getElementById('dia')
        let tipo = document.getElementById('tipo')
        let descricao = document.getElementById('descricao')
        let valor = document.getElementById('valor')

        let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

        if(despesa.validarDados()) {
            bd.gravar( despesa )
            
            document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
            document.getElementById('modal_titulo_cor').className = 'modal-header text-success'
            document.getElementById('modal_body').innerHTML = 'Despesa foi cadastrada com sucesso'
            document.getElementById('modal_button').innerHTML = 'Voltar'
            document.getElementById('modal_button').className = 'btn btn-success'
            
            
            //dialog sucesso
            $('#modalRegistroDespesas').modal('show')

        } else {

            document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
            document.getElementById('modal_titulo_cor').className = 'modal-header text-danger'
            document.getElementById('modal_body').innerHTML = 'Erro na gravação! Verifique se todos os campos foram preenchidos corretamente.'
            document.getElementById('modal_button').innerHTML = 'Voltar e corrigir'
            document.getElementById('modal_button').className = 'btn btn-danger'


            //dialog erro
            $('#modalRegistroDespesas').modal('show')

        }

    }

    function carregaListaDespesas() {

        let listaDespesas = Array()
        
        listaDespesas = bd.recuperarTodosRegistros()

        console.log(listaDespesas)
    }