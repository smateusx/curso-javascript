function verificar(num) {
    return num % 3 === 0
}

console.log(`${verificar(9)}`)
console.log(`${verificar(10)}`)

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(4))