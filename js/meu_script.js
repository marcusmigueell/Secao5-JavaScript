//alert('Olá, seja bem vindo ao curso!')

/*--------------------------------------------------------------------------------------------------------------------------------------*/

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

/*--------------------------------------------------------------------------------------------------------------------------------------*/

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

/*--------------------------------------------------------------------------------------------------------------------------------------*/

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

/*--------------------------------------------------------------------------------------------------------------------------------------*/

/*

Atividade 1 - A descrição está na pasta Atividades

var idade = prompt('Digite a sua idade:')

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

/*--------------------------------------------------------------------------------------------------------------------------------------*/

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

/*--------------------------------------------------------------------------------------------------------------------------------------*/

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

/*--------------------------------------------------------------------------------------------------------------------------------------*/

/*

Atividade 2 - A descrição está na pasta Atividades

var nome = prompt('Digite seu nome:')
var alt = prompt('Digite sua altura em centimetros:')
var peso = prompt('Digite seu peso')

alt = parseFloat(alt)
alt /= 100
peso = parseFloat(peso)

var imc = peso / (alt * alt)

if (imc < 16) {
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ', sendo classificado como baixo peso muito grave')
} else if (imc >= 16 && imc < 17) {
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ', sendo classificado como baixo peso grave')
} else if (imc >= 17 && imc < 18.50) {
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ', sendo classificado como baixo peso')
} else if (imc >= 18.50 && imc < 25) {
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ', sendo classificado como peso normal')
} else if (imc >= 25 && imc < 30) {
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ', sendo classificado como sobrepeso')
} else if (imc >= 30 && imc < 35) {
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ', sendo classificado como Obesidade grau 1')
} else if (imc >= 35 && imc < 40) {
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ', sendo classificado como Obesidade grau 2')
} else if (imc >= 40) {
    document.write(nome + ' possui índice de massa corporal igual a ' + imc + ', sendo classificado como Obesidade grau 2')
}

*/

/*--------------------------------------------------------------------------------------------------------------------------------------*/

/*

    Funções

    function nomeDaSuaFuncao (parametros) {
        O que sua função fará

        return nome-da-variavel-com-o-conteudo-que-deseja-retornar
    }

    EXEMPLO: Função para calcular a área de um terreno

    function calcularAreaTerreno (largura, comprimento) {

        var area = largura * comprimento

        return area
    }

    var resultado = calcularAreaTerreno(15,25)
    document.write(resultado)

*/

/*--------------------------------------------------------------------------------------------------------------------------------------*/

/*

    Funções anonimas

    var exibirSaudacao = function (nome) {
        document.write('Olá ' + nome + ', tudo bem?')
    }

    exibirSaudacao('Marcus')

*/

/*--------------------------------------------------------------------------------------------------------------------------------------*/

/*

    Funções callback

    function exibirArtigo (id, callbackSucesso, callbackErro) {
        //lógica: recuperar o id via requisição http
        if (true) {
            callbackSucesso ('Funções de callback em JS', 'Funções de callback são muito utilizadas ....')
        } else {
            callbackErro('Erro ao recuperar os dados')
        }
    }

    var callbackSucesso = function(titulo, descricao) {
        document.write('<h1>' + titulo + '</h1>')
        document.write('<hr>')
        document.write('<p>' + descricao + '</p>')
    }

    var callbackErro = function(erro) {
        document.write('<p><b>Erro: </b>' + erro + '</p>')
    }

    exibirArtigo(1, callbackSucesso, callbackErro)

*/

/*--------------------------------------------------------------------------------------------------------------------------------------*/

    /*

    // funções para manipular arquivos - podemos ver todos os método no site https://www.w3schools.com/jsref/jsref_obj_string.asp

    // string --> marcus vinIcius
    // posição -> 01234567891011121314

    var nome = 'marcus vinIcius'

    // método length = contar a quantidade de caracteres
    document.write(nome.length)

    document.write('<br><hr>')

    // método charAt(), recuperar o caracter em que estamos passando a posição, lembrando que a primeira letra da string está na posição 0
    document.write(nome.charAt(4)) // retornará a letra u

    document.write('<br><hr>')

    // método indexOf(), retorna a primeira ocorrência da letra que passarmos por parametro
    document.write(nome.indexOf('i')) // retornará a posição 8
    document.write(nome.indexOf('I')) // retornará a posição 10
    document.write(nome.indexOf('w')) // retornará a posição -1, pois, não exite essa letra na string

    document.write('<br><hr>')

    //método replace(), substituir uma determinada parte da string por outra
    document.write(nome.replace('marcus', 'Marcus')) // retornará Marcus vinicius, o m maiusculo, já que qndo criei a variavel estava minuscula

    document.write('<br><hr>')

    //método substr(), indico a posição inicial e indico quantos caracteres quero pegar
    document.write(nome.substr(7, 4)) // retornará vinI

    document.write('<br><hr>')

    //método toLowerCase(), converter todos os caracteres da string para minusculas
    //método toUpperCase(), converter todos os caracteres da string para maiusculas
    document.write(nome.toLowerCase() + '<br>')
    document.write(nome.toUpperCase())

    document.write('<br><hr>')

    //método trim(), remove os espaços em branco das estremidades da string
    document.write(nome.trim())

    */

/*--------------------------------------------------------------------------------------------------------------------------------------*/

    /*

    // Funções para tarefas matemáticas - podemos ver todos os método no site https://www.w3schools.com/jsref/jsref_obj_math.asp

    var x = 10.380
    var y = 10.580

    // método para arredondar para cima
    document.write(Math.ceil(x))

    document.write('<br><hr>')

    // método para arredondar para baixo
    document.write(Math.floor(x))

    document.write('<br><hr>')

    // método para arredondar conforme as casas decimais
    document.write(Math.round(x) + '<br>')
    document.write(Math.round(y))

    document.write('<br><hr>')

    // método que fornece um número aleatório entre 0 e 1
    var z = Math.random()
    document.write(z)

    */

/*--------------------------------------------------------------------------------------------------------------------------------------*/

    //Funções para manipulação de datas - podemos ver todos os método no site https://www.w3schools.com/jsref/jsref_obj_date.asp

    /*
    
    var data = new Date()

    document.write(data.getDate() + '<br>') // retorna o dia
    document.write((data.getMonth() + 1) + '<br>') // retorna o mês, considera os meses de 0 a 11
    document.write(data.getFullYear() + '<br>') // retorna o ano

    document.write('<br><hr>')

    //adicionar ou remover dias da data, podemos fazer com meses e anos tbm, só temos que mudar para setMonth ou setFullYear
    document.write(data.toString() + '<br>')
    data.setDate(data.getDate() + 1)
    document.write(data.toString() + '<br>')

    document.write('<hr>')

    // quantos dias existe entre as datas 13/01/2021 e 19/02/2021
    var data1 = new Date(2021, 0, 15);
    var data2 = new Date(2021, 1, 23);

    var milissegundos_por_dia = (1*24*60*60*1000)
    var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())

    document.write(data1.toString() + '<br>')
    document.write(data2.toString() + '<br>')

    // converter datas para algo que possamos calcular

    document.write('<hr>')

    document.write(data1.getTime() + '<br>')
    document.write(data2.getTime() + '<br>')

    document.write('<hr>')

    // encontrar a quantidade milissegundos entre data1 e data2

    document.write(Math.abs(data1.getTime() - data2.getTime()) + '<br>')
    
    // 1 dia tem 24 hrs, cada hora tem 60 minutos, cada minuto tem 60 segundos e cada segundo tem 1000 milissegundos
    // quantos milissegundos tem um dia ?

    document.write('1 dia tem: ' + (1*24*60*60*1000) + '<br>')

    document.write('A diferença entre as datas é de ' + milissegundos_entre_datas/milissegundos_por_dia + ' dias')

    */
 
/*--------------------------------------------------------------------------------------------------------------------------------------*/

    /*
    
    // Atividade 3 - A descrição está na pasta Atividades

    var x = prompt('Digite o primeiro valor:')
    var op = prompt('Digite a operação - soma ou subtração')
    var y = prompt('Digite o segundo valor:')

    x = parseInt(x)
    y = parseInt(y)
    
    function soma (a, b, operacao) {
        if (operacao == 'soma'){
            document.write('O resultado é: ' + (a+b))
        } else if (operacao == 'subtração'){
            document.write('O resultado é: ' + (a-b))
        }
    }

    soma(x, y, op)

    */

/*--------------------------------------------------------------------------------------------------------------------------------------*/

    /*

        funções sem parametros

        function soma() {
            var resultado = 0
            for(var i in arguments) {
                resultado += arguments[i]
            }
            return resultado
        }

        console.log(soma(7, 5, 3.2, 0.8))

        console.log(soma(7, 5, 3.2, 0.8, 'Texto'))
    
    */