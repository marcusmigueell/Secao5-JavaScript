var objetos = Array('Garfo', 'Impressora', 'Cadeira')

function adicionar() {
    var recuperado = document.getElementById('elemento').value

    if(recuperado === '') {

        alert('Informe um valor válido')

    } else if (objetos.indexOf(recuperado) === -1){

        objetos.push(recuperado)
        document.getElementById('elemento').value = ''

    } else {

        alert('Elemento já existe no Array')
        document.getElementById('elemento').value = ''
    }

    console.log(objetos)
}

function ordenar(){

    objetos.sort()

    console.log(objetos)
}