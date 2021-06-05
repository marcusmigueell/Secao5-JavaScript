    //Encapsulamento

    class Tv {
        constructor() {
            this._relacaoCanais = Array(2, 4, 5, 7, 10)  // o underline (_) no começo significa que a variavel é privada
            this._canalAtivo = 5
            this._volume = 5
        }

        set relacaoCanais(novoCanal){
            this._relacaoCanais = novoCanal
        }

        get relacaoCanais() {
            return this._canalAtivo
        }

        set canalAtivo(canal){
            let x = this._relacaoCanais.indexOf(canal)
            if (x === -1) {
                console.log('canal inexistente, portanto, mostrarei o canal default que é o 5 logo abaixo')
            } else {
                this._canalAtivo = canal
            }
            
        }

        get canalAtivo() {
            return this._canalAtivo
        }

        set volume(valor){
            this._volume = valor
        }

        get volume() {
            return this._canalAtivo
        }
    }

    let tv = new Tv()
    tv.canalAtivo = 3
    console.log(tv.canalAtivo)

    tv.canalAtivo = 7
    console.log(tv.canalAtivo)