function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 2000,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 50000, desc: 0.17}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))//se passar parametros tem que ser dentro do array