function salvar(req, res) {//função midlew.. req=poderia pegar parametros formulario string ou até url
    res.send('Usuario > salvar')//volta uma resposta
}

function obter(req, res) {
    res.send('Usuario > obter')
}

module.exports = { salvar, obter }//faz a exportação para ir na pasta index.js