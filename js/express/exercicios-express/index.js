const express = require('express')//require: para importar alguma coisa no caso espress
const app = express()//instancia o express construtor p retornar aplicação
const bodyParser = require('body-parser')//referencia para bodyparser ou importar

const saudacao = require('./saudacaoMid')//import const recebe require recebe saudaçãoMid arquivo,,se quisesse usar modulo do node apenas como na linha 1('saudacaoMid')
const usuarioApi = require('./api/usuario')//importar uma api do arquivo  usuario.js
const produtoApi = require('./api/produto')//uma função do arquivo produto.js
produtoApi(app, 'com param!')//saida da linha 7 da const produtoApi saida é : Produto > Obter > com param! =muito usado


app.post('/usuario', usuarioApi.salvar)//no postman em post se digitar /usuario ai salva usuario,,,get ou post são tipos de metodos do http
app.get('/usuario', usuarioApi.obter)//em get para obter, a ver com arquivo usuario.js

app.use(bodyParser.text())//=qualquer texto da requisição será interpretado,,,com o uso do use é possivel utilizar tanto quanto get quanto post em postman e com all é possivel retornar todos metodos postman
app.use(bodyParser.json())//bodyparser agr em modo json, q retorna uma função middleware
app.use(bodyParser.urlencoded({ extended: true }))//chamando outro parser quando chega urlencoded x-www de postman e habilita extended true podendo usar outros dados

app.use(saudacao('Rafael'))//aqui passa nome saudação de saudaçãoMid.js ${nome},,retornado em diversas formas pelo backend

app.use((req, res, next) => {//função middleware possui (req,res,next 3 parametro)nest vai p proximo,,facilitar o desenvolvimento de aplicações sistemas desenvolvidos de forma não integrada automática
    console.log('Antes...')//saida de console terminal..
    next()
})

app.get('/clientes/relatorio', (req, res) => {//clientes/relatorio é a url para esta função ser chamada ou site
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)//usar requisição p acessar relatorios e ano com query no postman digitando url + localhost3000/clientes/relatorios?completo=true&ano=2018,,,não muito util
})

app.post('/corpo', (req, res) => {/*'post' no caso postman apenas com post, a não ser q seja 'use' */
    // let corpo = ''   // let recebe vazio
    // req.on('data', function(parte) {//quando tiver chegando dados apartir do corpo da requisição, chama a função e parte..
    //     corpo += parte   //cada parte q vai chegando em corpo
    // })

    // req.on('end', function() {//quando termina req..
    //     res.send(corpo)//mandando de volta tudo o que recebeu,,resumindo em postman digita url coloca post e clica em body ou x-www-from ou em modo json.. em baixo tudo o que digitar sai no site clicando send.. importante e util
    // })
    res.send(req.body)//saida bodyparser da requisição linha 14 em postman colocando formato text..15 formato json..16urlencode
})

app.get('/clientes/:id', (req, res) => {/*:id == os dois pontos significa algo q pode mudar dentro da url,,com tipo get no lugar de use não pode fazer requisição ou chamar com metodo post no postman apenas get ou 'option para mostra qual tipo suporta'.. */
    res.send(`Cliente ${req.params.id} selecionado!`)/*${acessa pelo req acima o parametros de:id digitando no postman..},,res.send=dando uma resposta aos parametros saindo no site */
})

app.get('/opa', (req, res, next) => {//arrow function=>{conteudo..},,a ordem de qual função q é chamada importa com express pelo chain of responsabilid chamando com next a proxima função entra em funcionamento
    console.log('Durante...')
    res.json({/*dentro terá obj js q será convertido p json */
        data: [/*atributo data o proprio array*/
            {id: 7, name: 'Ana', position: 1 },/*retornando um array de objetos.. */
            {id: 34, name: 'Bia', position: 2 },
            {id: 73, name: 'Carlos', position: 3 }
        ],
        count: 30,//quantos registros na base dessa consulta
        skip: 0,//quantas pagina pulou no caso primeira pagina
        limit: 3,//quanto tem na pagina limite 3
        status: 200//status..
    })

    next()//next liberando a proxima função.. q é depois
    
    // res.json({/*dados abaixo em json.. */
    //     name: 'iPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    // res.send('<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>')    /*é possivel colocar html no res.send mas não muito importante */
})

app.use((req, res) => {//função app.use(parametros= requisição,resposta),protocolo http baseado nestes parametros
    console.log('Depois...')
})

app.listen(3000, () => {//ouvir na porta 3000,,()=> callback para console.log
    console.log('Backend executando...')/*aparece no console e terminal */
})