//é uma função que retorna um objeto
function criarPessoa(){
    return {
        nome: 'Mateus',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {//usar ':' quando não colocar o nome nos parametros
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2985.99))
console.log(criarProduto('iPhone', 4900.99))