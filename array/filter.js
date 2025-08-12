const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Celular', preco: 1799, fragil: true},
    {nome: 'Copo de Vidro', preco: 8.9, fragil: true},
    {nome: 'Copo de Plastico', preco: 4.69, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 1000
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
