function imprimirSoma(a, b, c) {
    console.log((a + b)/c)
}

imprimirSoma(5, 110, 36)

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2,3))

//armazenando uma funcao em uma variavel
const imprimirSomar = function (a, b) {
    console.log(a-b)
}

imprimirSomar(2, 3)

//armazenando uma funcao arrow em uma variavel

const somar = (a, b) => {//substitui o nome funcao (=>)
    return a + b
}

console.log(somar(2,3))

const subtracao = (a, b) => a - b //retorno implicito

console.log(subtracao(2,3))