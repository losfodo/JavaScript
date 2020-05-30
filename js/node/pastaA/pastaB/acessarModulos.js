const moduloA = require('../../moduloA')//../sai da pastab vai para A ../volta +1 volta pasta node/moduloA chega no arquivo.js
console.log(moduloA.ola)//sai no console o this e ola..{} Fala Pessoal

/*const saudacao = require('saudacao')
console.log(saudacao.ola)*/

const c = require('./pastaC')//achado com index.js arquivos conectado a esse na pastaC
console.log(c.ola2)//legal

const http = require('http')//modulo interno do node
http.createServer((req, res) => {//(requisição, resposta)
    res.write('Bom dia!')//responder a uma aquisição
    res.end()//finaliza
}).listen(8080)//escuta na portao ou no browser localhost:8080