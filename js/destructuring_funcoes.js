
    // array
    let arr = [20, 40, 60, 80]

    function teste([ a, b, , c ]) {
        console.log(a, b, c)
    }

    teste(arr)


    //objeto

    let obj = {
        a: 10,
        b: 30,
        c: 50,
        d: 70
    }

    function teste({ a, c }) {   // aqui vamos pegar o valor de A e de C, pois, não funciona como array, pulando posições
        console.log(a, c)
    }

    teste(obj)