/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

//array
function res(a, b) {
    return [a+b, a-b, a/b, a*b]
}

console.log(res(4,3))

//objeto 
function res(a, b){
    return {
        soma: a + b,
        div: a / b,
        sub: a - b ,
        multi: a * b
    }
}

console.log(res(10, 2))