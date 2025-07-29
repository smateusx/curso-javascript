/*Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function res(base, expoente){
    return base ** expoente
}

console.log(`O valor é ${res(3,3)}`)

/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
 */

function res1(dividendo, divisor){
    const div = dividendo / divisor
    if(div % 2 == 0) {
        console.log('impar')
    } else {
        console.log('par')
    }

    return div
}

console.log(res1(10, 2))

