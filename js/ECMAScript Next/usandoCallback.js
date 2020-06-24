// sem promise...            ,,   callback do site para output
const http = require('http')//require conectar http modulo do proprio node, uma biblioteca

const getTurma = (letra, callback) => {//função getTurma
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` //URL:endereço de um recurso disponível em uma rede
    http.get(url, res => {//res:resposta retornara string de dados
        let resultado = ''//let recebe vazio

        res.on('data', dados => {
            resultado += dados //resultado recebe uma atribuição aditiva dados
        })

        res.on('end', () => {//terminou de chegar os dados
            callback(JSON.parse(resultado))//chama a função callback(parametro json(let resul..))
        })
    })
}

let nomes = []//array vazio
getTurma('A', alunos => {//get const turma(parametros
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))//alunos da turma A
    getTurma('B', alunos => {//alunos B
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))//exemplo:'C: Sammie',
            console.log(nomes)//saida dos nomes..
        })
    })
})