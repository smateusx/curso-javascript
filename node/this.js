console.log(this === global) //this aponta para o modulo
console.log(this === module) //this é um obj que é a referencia de module.exports
console.log(this === module.exports)
console.log(this === exports) //fora da função ele aponta pra exports
function logThis() { //this dentro da funcao é global, menos na arrow function
    console.log('dentro da função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()