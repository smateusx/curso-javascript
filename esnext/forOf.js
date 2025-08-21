for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

//percorre o indice
for (let i in assuntosEcma) {
    console.log(i)
}

//percorre o valor do indice
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

//chave e valor
for (let assunto of assuntosMap) {
    console.log(assunto)
}

//apenas chave
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

//apenas valor
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//percorrer as entradas, usando o operador de desestruturação
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}