const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')//importa axios
/*faz uma requisição para obter coteudo da url site */
const chineses = f => f.pais === 'China' //cria const chineses =recebe f função f.pais ===superigual china
const mulheres = f => f.genero === 'F' //cria const mulheres feminino
const menorSalario = (func, funcAtual) => {//menor salario criado recebe (acumulador funcionario,funcionario atual)
    return func.salario < funcAtual.salario ? func : funcAtual //return 1<outro ?retorna funcionario senão: retorna atualfunc
}

axios.get(url).then(response => {//axios prog .get pegar (url).then:Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.response função
    const funcionarios = response.data
    // console.log(funcionarios) //mostra todos os primeiros 100 elementos funcionarios

    // mulher chinesa com menor salário?
    const func = funcionarios //func recebe funcionarios
        .filter(chineses)//filter filtrar parametros a seguir
        .filter(mulheres)
        .reduce(menorSalario)//e um reduce para menorsalario

    console.log(func)//saida console com const func criada
})