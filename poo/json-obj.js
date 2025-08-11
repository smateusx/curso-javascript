//json  formato so de texto
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

//todos atributos tem q ta com aspas duplas
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))