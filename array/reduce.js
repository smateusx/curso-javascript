const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Otavio', nota: 6.3, bolsista: true},
    {nome: 'Marta', nota: 9.3, bolsista: false},
    {nome: 'Jose', nota: 7.5, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumlador, atual){
    console.log(acumlador, atual)
    return acumlador + atual
})

console.log(resultado)