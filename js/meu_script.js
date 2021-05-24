
/*

Selecionando elementos da página

console.log(document.getElementById('nome_usuario'))
console.log(document.getElementsByTagName('input'))
console.log(document.getElementsByClassName('campo_texto'))
console.log(document.getElementsByName('nome'))

*/

/*

Manipulando valores de inputs

function distribuiCaracter(){
    // selecionar o valor digitado
    var caracter = document.getElementById('entrada').value

    //limpar o campo de digitação
    document.getElementById('entrada').value = ''

    //limpar espaços em branco nas extremidades da string
    caracter.trim()

    switch(caracter){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adicionar o caracter no campo referente a números
            document.getElementById('apenas_numeros').value += caracter
            break;
        
        default:
            //adicionar o caracter no campo referente a letras
            document.getElementById('apenas_letras').value += caracter

    }
}

*/

/*

Manipulando estilos de elementos

function modificaEstilo(corDeFundo, l, a){
    document.getElementById('quadrado').style.backgroundColor = corDeFundo
    document.getElementById('quadrado').style.width = l
    document.getElementById('quadrado').style.height = a
}

*/

/*

Manipulando classes de elementos

function modificaClasse() {
    document.getElementById('mensagem').className = 'estilo2'
}

*/