/*

    Estrutura while

    while (condição) {
        //códigos
        //condição de parada
    }

    var x = 1

    while (x <= 10) {
        document.write(x + '<br>')

        x++  //condição de parada
    }

*/

/*

    Estrutura do while

    do {
        //código
    } while (condição de parada)

    var x = 1

    do {
        document.write(x + '<br>')
        x++
    }while (x <= 10)

*/

/*

    Estrutura do for

    for (variavel; condição; controle){
        //código
    }

    for (var i = 1; i <= 10; i++){
        document.write(i + '<br>')
    }

*/

/*

    Percorrendo Arrays

    var lista_frutas = []
    
    lista_frutas[0] = 'Banana'
    lista_frutas[1] = 'Maça'
    lista_frutas[2] = 'Morango'
    lista_frutas[3] = 'Uva'
  
    for (var i = 0; i < lista_frutas.length; i++) {
        document.write(lista_frutas[i] + '<br>')
    }

    document.write('<br><br>')

    var j = 0

    while (j < lista_frutas.length){
        document.write(lista_frutas[j] + '<br>')
        j++
    }

*/

/*

    Criando uma tabuada com 2 laços

    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++){
            document.write(i + ' x ' + j + ' = ' + (i*j) + '<br>')
        }
        document.write('<hr>')
    }

*/

/*

    Laço for in

    //var listaConvidados = ['Marcus', 'Adriana', 'Celina', 'José', 'Maria']

    var listaConvidados = []

    listaConvidados['a'] = 'Marcus'
    listaConvidados[10] = 'Adriana'
    listaConvidados['abacaxi'] = 'Celina'
    listaConvidados[-1] = 'José'
    listaConvidados[true] = 'Maria'

    console.log(listaConvidados)

    for (var x in listaConvidados) {
        document.write(listaConvidados[x] + '<br>')
    }

*/

/*

    Laço foreach

    var listaConvidados = ['Marcus', 'Adriana', 'Celina', 'José', 'Maria']

    document.write(listaConvidados + '<br>')

    listaConvidados.forEach(function(valor, indice, array) {
        console.log('indice ' + indice + ' | valor ' + valor)

        if(valor == 'Marcus') {
            array[indice] = 'Miguel'
        }

    })

    document.write(listaConvidados + '<br>')

*/