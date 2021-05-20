//alert('Olá, seja bem vindo ao curso!')

/*---------------------------------------------------------------------------------------*/ 

/*

Atividade básica para entendimento do início do javaScript

declaração de variáveis {
    var nomeDaVariavel = string
    var nomeDaVariavel = number
    var nomeDaVariavel = boolean

    O nomeDaVariavel não pode conter caracteres especiais e terá que ser únicas e só podem ser iniciadas com letras ou '_' underline
    O javaScript é sensite case, então, os nomes das variáveis curso, Curso e CURSO são nomes diferentes, portanto podemos ter essas 3 variáveis declaradas
    Também não poderemos usar nomeDaVariavel com palavras reservadas, por exemplo não poderemos fazer isso --> var prompt = 'teste',
    pois, prompt é uma palavra reservada do JavaScript
}

var a = prompt('Digite o valor da variavel a: ')
var b = prompt('Digite o valor da variavel b: ')
var c = null

document.write('<h1>Desafio A-B-C</h1>')
document.write('var a = ' + a + '<br>')
document.write('var b = ' + b + '<br>')

document.write('<hr>')
document.write('Invertendo os valores das variáveis a e b <br>')
document.write('<hr>')

c = a
a = b
b = c

document.write('var a = ' + a + '<br>')
document.write('var b = ' + b)

*/

/*---------------------------------------------------------------------------------------*/

/*

if (condição) {
    executa esse bloco se a condição for verdadeira = true
} else {
    executa esse bloco se a condição for falsa = false
}

Operadores lógicos {

    E definida por ------- && 
    OU definida por ------ ||
    Negação definida por - ! 
    > ou >= -------------- maior que - ou - maior ou igual a
    < ou <= -------------- menor que - ou - menor ou igual a
    == ------------------- para saber se são igual
    === ------------------ para saber se são igual e se seus tipos também são iguais
}

alert('Para o aluno ser aprovado sua nota terá que ser maior ou igual a 6 e a quantidade de faltas deverá ser menor que 5')

var nota = prompt('Digite a nota do aluno:')
var faltas = prompt('Digite a quantidade de faltas do aluno:')
var media = 6
var totalFaltas = 5

if (nota >= media && faltas < totalFaltas) {
    document.write('O aluno foi aprovado, pois, atende os requisitos para aprovação, pois, sua nota foi ' + nota + ' e a quantidade de faltas foi ' + faltas)
} else {
    document.write('O aluno foi reprovado, pois, não atende os requisitos para aprovação, pois, sua nota foi ' + nota + ' e a quantidade de faltas foi ' + faltas)
}

*/

/*---------------------------------------------------------------------------------------*/

/*

Exemplo de casting - temos também parseFloat() e parseString()

var num1 = prompt('Digite algum número:')
var num2 = prompt('Digite outro número:')

document.write('O primeiro número que você informou foi: ' + num1 + '<br>')
document.write('O segundo número que você informou foi: ' + num2 + '<br>')

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write('A soma deles são: ' + (num1 + num2))

*/

/*---------------------------------------------------------------------------------------*/

/*var idade = prompt('Digite a sua idade:')

if (idade > 0 && idade < 15) {
    document.write('Criança')
} else if (idade >= 15 && idade < 30) {
    document.write('Jovem')
} else if (idade >= 30 && idade < 60) {
    document.write('Adulto')
} else if (idade >= 60 && idade < 110) {
    document.write('Idoso')
} else if (idade <= 0 || idade > 110) {
    document.write('Idade invalida')
} */

/*---------------------------------------------------------------------------------------*/

/*

switch(opção) {
    case 1:
        trecho de código que será executado se o parametro == 1
    break

    case 2:
        trecho de código que será executado se o parametro == 2
    break

    default:
        trecho de código que será executado se o parametro não encontrado
    break
}

var opcao = prompt('Digite uma opção:')

switch(parseInt(opcao)) {
    case 1:
        document.write('Parametro 1')
    break

    case 2:
        document.write('Parametro 2')
    break

    default:
        document.write('Parametro não encontrado')
    break
}

*/

/*---------------------------------------------------------------------------------------*/

/*

Operadores aritméticos {
    Adição ------------> + {
        var a = 5 + 7 ======= a = 12

        var num1 = prompt('Digite algum número:')
        var num2 = prompt('Digite outro número:')

        num1 = parseInt(num1)
        num2 = parseInt(num2)

        document.write('A soma de ' + num1 + ' e' + num2 + 'é: ' + (num1 + num2))
    }

    Subtração ---------> - {
        var a = 7 + 5 ======= a = 2

        var num1 = prompt('Digite algum número:')
        var num2 = prompt('Digite outro número:')

        num1 = parseInt(num1)
        num2 = parseInt(num2)

        document.write('A subtração de ' + num1 + ' e' + num2 + 'é: ' + (num1 - num2))
    }

    Multiplicação -----> * {
        var a = 5 * 7 ======= a = 35

        var num1 = prompt('Digite algum número:')
        var num2 = prompt('Digite outro número:')

        num1 = parseInt(num1)
        num2 = parseInt(num2)

        document.write('A multplicação de ' + num1 + ' e' + num2 + 'é: ' + (num1 * num2))
    }

    Divisão -----------> / {
        var a = 10 / 2 ======= a = 5

        var num1 = prompt('Digite algum número:')
        var num2 = prompt('Digite outro número:')

        num1 = parseInt(num1)
        num2 = parseInt(num2)

        document.write('A divisão de ' + num1 + ' por' + num2 + 'é: ' + (num1 / num2))
    }

    Resto da divisão --> % {
        var a = 10 % 3 ======= a = 1

        var num1 = prompt('Digite algum número:')
        var num2 = prompt('Digite outro número:')

        num1 = parseInt(num1)
        num2 = parseInt(num2)

        document.write('O resto da divisão de ' + num1 + ' por' + num2 + 'é: ' + (num1 % num2))
    }

    Incremento --------> ++ {
        var a = 12 ============ a++ ========= a = 13

        var num1 = prompt('Digite algum número:')

        num1 = parseInt(num1)

        document.write('O incremento de ' + (num1++) + ' é: ')
        document.write(num1)
    }

    Decremento --------> -- {
        var a = 12 ============ a-- ========= a = 11

        var num1 = prompt('Digite algum número:')

        num1 = parseInt(num1)

        document.write('O decremento de ' + (num1--) + ' é: ')
        document.write(num1)
    }
}


*/