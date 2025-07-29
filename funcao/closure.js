//closure é o escopo criado quando uma função é declarada
//esse escopo permite a função acessar e manipular variáveis externas a função
//contexto lexico em acao
const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())