const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const av1 = 9.85
const av2 = 6.98

const total = av1 * peso1 + av2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //mostrar 2 casas decimais