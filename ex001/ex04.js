/*function somar(valor){
    valorReal = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valorReal)
}

somar(0.1+0.2+0.8)*/

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));