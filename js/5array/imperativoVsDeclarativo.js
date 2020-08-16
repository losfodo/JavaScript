const alunos = [//array e objetos
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0 //cria variavel total1 para acumular os valores e calcular a media
for (let i = 0; i < alunos.length; i++) {//for(i=0;i menor quantidade todos alunos;i++ contagem+1)
    total1 += alunos[i].nota //total1= total1 nota acumulada+ nota cada aluno
}
console.log(total1)//total notas alunos 17.1
console.log(alunos.length)//2 alunos
console.log(total1 / alunos.length)//dividindo.. 8.55

// Declarativo, ambos parecidos mas declarativo mais util em outros fatores
const getNota = aluno => aluno.nota// cria const getnota pegar nota aluno com função
const soma = (total, atual) => total + atual //soma notas..

const total2 = alunos.map(getNota).reduce(soma)//cria const total2 o map para puchar valor nota aluno,usa reduce usando soma como criterio de agregação..
console.log(total2 / alunos.length)//divisão..