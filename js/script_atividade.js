function mudaCor1() {
    document.getElementById('caixa_texto').style.background = 'yellow'
}


function mudaCor2() {

    var texto = document.getElementById('caixa_texto').value

    if (texto.length < 3){
        document.getElementById('caixa_texto').style.background = 'red'
    } else {
        document.getElementById('caixa_texto').style.background = 'green'
    }

    
    
}