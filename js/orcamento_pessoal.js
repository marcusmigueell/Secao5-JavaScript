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

    class Bd { // inicio class Bd

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

                despesa.id = i    
                despesas.push(despesa)
            }

            return despesas
        }

        pesquisar(despesa) {

            let despesasFiltradas = Array()
            despesasFiltradas = this.recuperarTodosRegistros()

            //ano
            if (despesa.ano != ''){
                despesasFiltradas =  despesasFiltradas.filter( a => a.ano == despesa.ano)
            }
            
            //mes
            if (despesa.mes != ''){
                despesasFiltradas =  despesasFiltradas.filter( m => m.mes == despesa.mes)
            }

            //dia
            if (despesa.dia != ''){
                despesasFiltradas =  despesasFiltradas.filter( d => d.dia == despesa.dia)
            }

            //tipo
            if (despesa.tipo != ''){
                despesasFiltradas =  despesasFiltradas.filter( t => t.tipo == despesa.tipo)
            }

            //descrição
            if (despesa.descricao != ''){
                despesasFiltradas =  despesasFiltradas.filter( desc => desc.descricao == despesa.descricao)
            }

            //valor
            if (despesa.valor != ''){
                despesasFiltradas =  despesasFiltradas.filter( v => v.valor == despesa.valor)
            }
            
            return despesasFiltradas

        }

        remover(id) {
            localStorage.removeItem(id)
        }

    } // Fim class Bd

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

            ano.value = ''
            mes.value = ''
            dia.value = ''
            tipo.value = ''
            descricao.value = ''
            valor.value = ''

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

    function carregaListaDespesas(despesas = Array(), filtro = false) {
        
        if(despesas.length == 0 && filtro == false) {
            despesas = bd.recuperarTodosRegistros()
        }
        
        //selecionando o elemento tbody da tabela
        let listaDespesas = document.getElementById('listaDespesas')
        listaDespesas.innerHTML = ''

        //percorrer o array despesas, listando cada despesa de forma dinâmica
        despesas.forEach( function(d) {

            //criando a linha (tr)
            let linha = listaDespesas.insertRow()

            //criar as colunas (td)
            linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

            //ajusta o tipo
            switch(d.tipo) {
                case '1': d.tipo = 'Alimentação'
                    break
                
                case '2': d.tipo = 'Educação'
                    break

                case '3': d.tipo = 'Lazer'
                    break

                case '4': d.tipo = 'Saúde'
                    break

                case '5': d.tipo = 'Transporte'
                    break
            }

            linha.insertCell(1).innerHTML = d.tipo
            linha.insertCell(2).innerHTML = d.descricao
            linha.insertCell(3).innerHTML = d.valor

            //criar botão de exclusão
            let btn = document.createElement("button")
            btn.className = 'btn btn-danger'
            btn.innerHTML = '<i class="fas fa-times"></i>'
            btn.id = `id_despesa_${d.id}`
            btn.onclick = function() {
                
                let id = this.id.replace('id_despesa_', '')

                bd.remover(id)

                //recarregar a pagina
                window.location.reload()
            }
            linha.insertCell(4).append(btn)

        })

    
    }

    function pesquisarDespesas() {
        let ano = document.getElementById('ano').value
        let mes = document.getElementById('mes').value
        let dia = document.getElementById('dia').value
        let tipo = document.getElementById('tipo').value
        let descricao = document.getElementById('descricao').value
        let valor = document.getElementById('valor').value

        let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

        let listaFiltrada = bd.pesquisar(despesa)

        carregaListaDespesas(listaFiltrada, true)

    }