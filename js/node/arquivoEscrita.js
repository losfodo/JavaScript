const fs = require('fs')//faz require fs:file sistem

const produto = {//cria const com obj e parametros
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {//fs:file sistem(dirname + nome arquivo quer gerar)
        console.log(err || 'Arquivo salvo!')//JSON.stringify:conteudo q eu quero persistir no arquivo converção para formato json,,err:call back erro
})//console(imprime err erro ou || 'arquivo salvo':gera um outro arquivo json)
//objeto é convertido para arquivoGerado.json