const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista //cria const todosbolsistas = (2 parametros) função resultado true e bolsista false
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))//sa map e reduce const todos bolsista.. false

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista //resultado true ou bolsista false,, pelo menos um é bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))//true