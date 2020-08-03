function saudacao(nome) {//função
    return function(req, res, next) {//retornando função middleware console para sair $nome...
        console.log(`Seja bem vindo ${nome}.`)//console recebe nome como objeto no terminal,,com $ muda para templet string``
        
        next()//coloca next para outras funçoes do arquivo index.js sairem..
    }
}

module.exports = saudacao//se quiser exportar em outro arquivo do modulo, tendo um maior encapsulamento entra os arquivos,, usando para importar e exportas funçoes objstos e etc...