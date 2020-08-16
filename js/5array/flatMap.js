const escola = [{
    nome: 'Turma M1',//turma M1
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',//turma M2
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota//extrair a nota de dentro do aluno
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)//usa map para gerar um novo array

const notas1 = escola.map(getNotasDaTurma)//cria const notas1 = escola const principal usando map para notas turma
console.log(notas1)//[ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))// sai concatenado array unido.. [ 8.1, 9.3, 8.9, 7.3 ]

Array.prototype.flatMap = function(callback) {//apartir flatmap para unir array
    return Array.prototype.concat.apply([], this.map(callback))//faz aply no concat e map com callback ambas turmas
}

const notas2 = escola.flatMap(getNotasDaTurma)//cria cosnt notas2 com const peincipal.flapmap
console.log(notas2)//saida q queremos.. [ 8.1, 9.3, 8.9, 7.3 ]

/*flatmap: um map associado a um concat=para ter um unico array para todas as notas da turma por ex */