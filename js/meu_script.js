var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight  // para achar a altura da página, responsivo
    largura = window.innerWidth  // para achar a largura da página, responsivo
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * largura) - 90 
    var posicaoY = Math.floor(Math.random() * altura) - 90
    /* Math.random() numeros aleatórios de 0 a 1 * largura/altura (para ir até a largura ou altura responsiva determinada na função ajustaTamanhoPalcoJogo) - Math.floor(arredondar para baixo) - 90 para descontar os 50px da imagem e ter 40px de sobra */

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    /* Se a posição tanto para altura ou largura for 0 e subtraindo 90, a imagem ficará um pouco fora da tela, então para corrigir sendo um valor negativo descontando os 90px ele irá para a posição 0, assim a imagem aparecerá completa e não irá aparecer a barra de rolagem */

    //criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'Imagens/mosca.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

}

