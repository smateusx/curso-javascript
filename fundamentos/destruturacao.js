const pessoa = {
    nome: 'Mateus',
    idade: 24,
    endereco: {
        rua: 'Rua 123',
        numero: 100
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { endereco: {rua, numero, cep} } = pessoa
console.log(rua, numero, cep)