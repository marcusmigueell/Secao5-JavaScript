function calcular(tipo, valor){
    
    if (tipo === 'acao') {

        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            var campo = document.getElementById('resultado').value
            document.getElementById('resultado').value = eval(campo)
        }

    } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}