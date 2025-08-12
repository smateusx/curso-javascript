require('./global') //evitar global. usar sistema de modulos

console.log(global.MinhaApp.saudacao())
console.log(global.MinhaApp.nome)

MinhaApp.nome = 'Eita!'
console.log(global.MinhaApp.nome)