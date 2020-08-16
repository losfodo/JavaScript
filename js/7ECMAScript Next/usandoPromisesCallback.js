// com promise...     ,,promise:valor que pode estar disponível agora, no futuro ou nunca.
const http = require('http')

const getTurma = letra => {//parametro letra
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {//retornando promise(resolve:atendida, reject:rejeitada) >função arrow
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {//apartir do evento data vai chegando dados
                resultado += dados
            })
    
            res.on('end', () => {
                try {//try se conseguir resolve
                    resolve(JSON.parse(resultado))//passando json.parse
                } catch(e) {//chama catch com reject caso de erro algum problema
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// getTurma('A').then(alunos => {//coloca o then para conectar ao promises
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])//Promise.all(A B C parametros)
    .then(turmas => [].concat(...turmas))//um unico array pra cada pessoa
    .then(alunos => alunos.map(aluno => aluno.nome))//map (coloca apenas nome de cada um dos alunos)um em baixo do outro ex: A:doreen
    .then(nomes => console.log(nomes))//coloca then para conectar ao promises,,nesse then chama todos os nomes apenas e saida console
    .catch(e => console.log(e.message))//tratamento de erro

getTurma('D').catch(e => console.log(e.message))//sai mensagem de erro