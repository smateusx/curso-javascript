const { set } = require("lodash");

// nao aceita repetição/nao indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Vitória')
times.add('Vitória')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))