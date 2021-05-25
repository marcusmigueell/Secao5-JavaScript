/*

Array Básico

var lista_frutas = []

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maça'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

var lista = lista_frutas

console.log(lista)
console.log(lista.length)

*/

/*

Array multidimensional

var lista_coisas = []

lista_coisas['frutas'] = []

lista_coisas['frutas'][0] = 'Banana'
lista_coisas['frutas'][1] = 'Maça'
lista_coisas['frutas'][2] = 'Morango'
lista_coisas['frutas'][3] = 'Uva'

lista_coisas['pessoas'] = []

lista_coisas['pessoas'][0] = 'Adriana'
lista_coisas['pessoas'][1] = 'Celina'
lista_coisas['pessoas'][2] = 'Marcus'

console.log(lista_coisas)

document.write(lista_coisas['frutas'][2] + '<br>')
document.write(lista_coisas['pessoas'][0])

*/

/*

Array incluir e remover

//incluir elemento no final do array
nomeDoArray.push('o que será inserido')

//incluir elemento no inicio do array
nomeDoArray.unshift('o que será inserido')

//excluir elemento no final do array
nomeDoArray.pop()

//excluir elemento no inicio do array
nomeDoArray.shift()

var lista_coisas = []

lista_coisas['frutas'] = []
lista_coisas['pessoas'] = []

lista_coisas['frutas'].push('Banana')
lista_coisas['frutas'].unshift('Uva')


console.log(lista_coisas)

*/

/*

método de pesquisa em Array

//para fazer a pesquisa faremos da seguinte maneira:
nomeDoArray.indexOf('o que vc quer pesquisar')

var lista_frutas = []

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maça'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

var aux = lista_frutas.indexOf('Abacaxi')

if (aux === -1) {
    console.log('Elemento não existe')
} else {
    console.log(aux)
}

var aux = lista_frutas.indexOf('Morango')

if (aux === -1) {
    console.log('Elemento não existe')
} else {
    console.log(aux)
}

*/

/*

Método de ordenação de Array

//para fazer a ordenação de strings faremos da seguinte maneira:
nomeDoArray.sort()

var lista_frutas = []

lista_frutas[0] = 'Uva'
lista_frutas[1] = 'Morango'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Maça'

lista_frutas.sort()

console.log(lista_frutas)

//para fazer a ordenação de números faremos da seguinte maneira:
nomeDoArray.sort(ordenaNumeros)

var lista_numeros = []

lista_numeros[0] = 12
lista_numeros[1] = 40
lista_numeros[2] = 3
lista_numeros[3] = 7
lista_numeros[4] = 19
lista_numeros[5] = 1

console.log(lista_numeros.sort(ordenaNumeros))

function ordenaNumeros (a, b){
    return a - b
}

*/