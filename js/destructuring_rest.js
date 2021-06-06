
    // array
    let arr = [20, 40, 60, 80]

    let [ primeiro, ...resto] = arr

    console.log(primeiro, resto)

    //objeto

    let obj = {
        a: 10,
        b: 30,
        c: 50,
        d: 70
    }

    let { a, ...rest } = obj

    console.log(a, rest)