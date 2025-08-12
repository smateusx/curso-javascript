const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Otavio', nota: 6.3, bolsista: true},
    {nome: 'Marta', nota: 9.3, bolsista: false},
    {nome: 'Jose', nota: 7.5, bolsista: false}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))