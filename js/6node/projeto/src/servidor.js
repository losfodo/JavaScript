/*configurar aqui o express q sera o servidor web para criação do webservice */
const porta = 3003 //porta onde existe aplicaçoes para internet comunicação rede exemplo skype , browser,,uma porta atende uma requisição

const express = require('express')//faz require conectar com express,, q esta na pasta node_modules
const app = express()//instancia express com ,, app vai fazer os serviços
const bodyParser = require('body-parser')//require bodyparser importado
const bancoDeDados = require('./bancoDeDados')//faz require chamar arquivo banco de dados

app.use(bodyParser.urlencoded({ extended: true }))//use igual get praticamente,,urlencoded=função middlewares faz parser no body da requisição colocando extend true

app.get('/produtos', (req, res, next) => {//app forma de requisição,,request,response,next,,quer obter listra de produtos cadastrados
    res.send(bancoDeDados.getProdutos())//chama e envia como resposta bancodedados,, converte para json
})

app.get('/produtos/:id', (req, res, next) => {//coloca produto e parametro id para trazer produtos especificos baseados no id
    res.send(bancoDeDados.getProduto(req.params.id))//parametro id esta na requisição e nao res resposta
})
//quando for get vai pra onde tem get quando post vai em post a  reposição
app.post('/produtos', (req, res, next) => {//methodo post parecido com get mas difere com uso do postman,,cria methodo post para submeter aos dados e salvar produtos
    const produto = bancoDeDados.salvarProduto({//salvando na memoria  bancodedados
        nome: req.body.nome,//exemplo formulario muito usado post usando request.body
        preco: req.body.preco
    })
    res.send(produto) // gera JSON
})

app.put('/produtos/:id', (req, res, next) => {//pode se usar put como get 
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,//requests nome preço e id q é chave de cada obj criado
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {//para excluir um produto
    const produto = bancoDeDados.excluirProduto(req.params.id)//escolhe o produto
    res.send(produto) // JSON,, manda como resposta o q acabou de excluir
})

app.listen(porta, () => {//diz qual é a porta da aplicação chama callback
    console.log(`Servidor está executando na porta ${porta}.`)//starta aplicação na porta
})

/*apenas um aplicativo em uma porta permitido
*é possivel varias aplicaçoes na mesma porta apenas com proxy reverso */

/*Os middlewares são funções que podem tratar os inputs e outputs das rotas antes e ou depois que uma rota é processada,
 ou seja, você pode criar um middleware que intercepta e verificar se uma requisição esta enviando um header específico 
 e que caso o mesmo não esteja enviando o header ela retorne uma tela de erro para ... */

 /*post: no postman cria um objeto no app
 get: no postman mostra todos que foram criados no app 
 put: no postman altera um produto
 delete:excluir no postman*/