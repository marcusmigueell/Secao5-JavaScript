    //destructuring 

    let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

    let a = frutas[0]
    let b = frutas[1]
    let c = frutas[2]
    let d = frutas[3]

    console.log('a = ' + a)
    console.log('b = ' + b)
    console.log('c = ' + c)
    console.log('d = ' + d)

    // usando o destructuring

    let [e, f, g, h] = frutas

    console.log('e = ' + e)
    console.log('f = ' + f)
    console.log('g = ' + g)
    console.log('h = ' + h)

    //recuperar todo exceto a pera

    let [ i, j, , l ] = frutas

    console.log('i = ' + i)
    console.log('j = ' + j)
    console.log('l = ' + l)

    let [ , , m, ] = frutas

    console.log('m = ' + m)

    let [ , , n, , o = 'Banana'] = frutas

    console.log('n = ' + n)
    console.log('o = ' + o)

    let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria']]

    let [,[,q]] = coisas

    console.log('q = ' + q)