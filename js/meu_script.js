var altura = 0
var largura = 0
var vidas = 1       //criada para contar a quantidade de vidas que no caso tem que ser até 3 que é quantidade de corações
var tempo = 15      //atribuir ao cronometro

var criaMosquitoTempo = 1500  //o tempo para criar o mosquito na tela inicial 1,5 segundos usado tbm na linha 43 do app.html

var nivel = window.location.search  //para pegar todo o endereço do href
nivel = nivel.replace('?', '')      //para colocar nada no lugar do ponto de interrogação

if (nivel === 'normal'){    //para atribuir segundos diferentes para o aparecimento do mosquito pelo nivel selecionado
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'master'){
    criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight  // para achar a altura da página, responsivo
    largura = window.innerWidth  // para achar a largura da página, responsivo
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

    tempo -= 1

    if(tempo < 0) { //para que o cronometro não fique negativo
        clearInterval(cronometro) //para parar o cronometro em 0
        clearInterval(criaMosquito) //para parar de criar mosquito
        window.location.href = "vitoria.html" //redirecionar para página de vitória
    } else {
        document.getElementById('cronometro').innerHTML = tempo //para que a variável tempo apareça no do html dentro do span criado lá
    }
    
    
}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        if(vidas > 3){  //se for maior que 3 vamos interromper o jogo e direcionar para uma tela de game over
            window.location.href = "game_over.html"
        } else { //enquanto for menor que 3 e o elemento não for clicado o coração cheio será trocado por vazio direcionado pelo id v*
            document.getElementById('v' + vidas).src = "Imagens/coracao_vazio.png"
            vidas++
        }

    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 90 
    var posicaoY = Math.floor(Math.random() * altura) - 90
    /* Math.random() numeros aleatórios de 0 a 1 * largura/altura (para ir até a largura ou altura responsiva determinada na função ajustaTamanhoPalcoJogo) - Math.floor(arredondar para baixo) - 90 para descontar os 50, 70 ou 90px da imagem */

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    /* Se a posição tanto para altura ou largura for 0 e subtraindo 90, a imagem ficará um pouco fora da tela, então para corrigir sendo um valor negativo descontando os 90px ele irá para a posição 0, assim a imagem aparecerá completa e não irá aparecer a barra de rolagem */

    //criar o elemento html

    var mosquito = document.createElement('img')    //criando o elemento no imagem no corpo do html
    mosquito.src = 'Imagens/mosca.png'              //inserindo a imagem
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    //atribuindo as classes mosquito1, 2 ou 3 que está retornando da funçao e a classe para virá-la automaticamente na horizontal
    mosquito.style.left = posicaoX + 'px'           //posicionando horizontalmente a imagem com os valores aleatórios que criamos
    mosquito.style.top = posicaoY + 'px'            //posicionando verticalmente a imagem com os valores aleatórios que criamos
    mosquito.style.position = 'absolute'            //para que a imagem apareça precisamos colocar como absolute
    mosquito.id = 'mosca'                           //criando um id para mosquito
    mosquito.onclick = function(){                  //função para remover o elemento se ele for clicado
        this.remove()
    }

    document.body.appendChild(mosquito)             //colocando o objeto mosquito do tipo img no body do html

}

function tamanhoAleatorio() { //fazer com que a imagem fique mudando de tamanho
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) { // não usei o break, pois, o return interrompe automaticamente o switch
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {  //fazer com que a imagem vire aleatóriamente
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) { // não usei o break, pois, o return interrompe automaticamente o switch
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}