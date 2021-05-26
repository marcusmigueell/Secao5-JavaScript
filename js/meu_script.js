/*

    Window

    var janela
    function abrirPopUp() {
        janela = window.open('http://www.google.com', 'nova_janela', 'width=200, height=100')
    }

    function fecharPopUp() {
        janela.close()
    }

*/

/*--------------------------------------------------------------------------------------------------------------------------------*/

/*

    Screen

    var altura = window.screen.availHeight  // altura do navegador
    var largura = window.screen.availWidth  // largura do navegador

    document.write(altura + '<br>')
    document.write(largura)

*/

/*--------------------------------------------------------------------------------------------------------------------------------*/

/*

    Location

    window.location.href = 'http://www.google.com'

*/

/*--------------------------------------------------------------------------------------------------------------------------------*/

/*

    Timing

    setTimeout(<ação>, <tempo em milissegundos>) --> Executa ação uma vez após o tempo informado
    clearTimeout()

    setInterval(<ação>, <tempo em milissegundos>) -> Sempre executa a ação após o período informado
    setInterval()

    setTimeout(function(){document.write('Teste')}, 2000)

    var i = 5 

    setInterval(function() {
        document.write(i + '<br>')
        i--

        if (i ===0 ) {
            window.location.reload()
        }
    }, 1000)

    var x = setInterval(function() {
        document.write(i + '<br>')
        i--

        if (i ===0 ) {
            clearInterval(x)
        }
    }, 1000)

*/