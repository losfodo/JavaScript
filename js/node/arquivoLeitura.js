const fs = require('fs')//modulo q vai interno no sistem fs ordem instalado no node previamente

const caminho = __dirname + '/arquivo.json' //conecta com arquivo.json

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')//readFileSync:ler o arquivo de forma sincrona,,utf-8:e code dele
console.log(conteudo)//sai como esta nol arquivo.json

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {//(erro e conteudo)
    const config = JSON.parse(conteudo)//config para receber conteudo coloca se json.parse..
    console.log(`${config.db.host}:${config.db.port}`)//cria saida pega valor host e porta usando template string``só funciona se config for objeto
})

const config = require('./arquivo.json')//fazer require conectar
console.log(config.db)//sai até com config.db,, como ta por ultimo saira esse os anteriores acima não

fs.readdir(__dirname, (err, arquivos) => {//tbm assim lendo o diretorio usando dirname com(erro,arquivos)do diretorio em si
    console.log('Conteúdo da pasta...')
    console.log(arquivos)//sai todos os arquivos do node,, este sai tbm por ser geral
})