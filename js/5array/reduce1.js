const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))//extrair dos alunos apenas a nota cria 'a' de aluno result a.nota sair apenas a nota
                                                      //(acumulador array 0, atual 1)
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {//extrair dos alunos apenas a nota cria 'a' de aluno result a.nota com reduce
    console.log(acumulador, atual)//reduce serve callback com acumulador e valor atual
    return acumulador + atual //no caso reduce no final vai somar os dois com return
}, 0)//valor inicial 0//sai acima console a esquerda numero soma a direita acumulador, atual todos q é somado
/*0 7.3
7.3 9.2
16.5 9.8
26.3 8.7 */

console.log(resultado)//valor total acumulado.. 35

/*reduce serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra.
 Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único. */