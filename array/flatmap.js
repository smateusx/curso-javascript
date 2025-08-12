const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo', 
        nota: 5.9
    }, {
        nome: 'Ana',
        nota: 8.5
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 6.5
    }, {
        nome: 'Marcos',
        nota: 9.9
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)