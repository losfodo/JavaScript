//servidor responsavel para prover os dados estaticos e alguns serviços formularios
const bodyParser = require('body-parser')//colocado nas dependencias package.json responsavel por fazer parser formularios responsavel por ler e colocar no back end
const express = require('express')//servidor
const app = express()//instanciar o express em const app

app.use(express.static('.'))//dentro da pasta atual sirva os arquivos estaticos pastas css js fonst..
app.use(bodyParser.urlencoded({ extended: true }))//encodeURIComponent() codifica uma URI responsavel por ler os dados transformar obj
app.use(bodyParser.json())//se vier json na reposição este code aplica transforma json em objeto

const multer = require('multer')//multer: usa interpletar formulario do arquivo do upload

const storage = multer.diskStorage({//diskStorage função q recebe obj
    destination: function (req, file, callback) {
        callback(null, './upload')//chama callback para qual pasta destino q armazena arquivo.. no caso pasta upload,,ou seja qualquer dowload baixa na pasta upload
    },
    filename: function (req, file, callback) {//filename:função chama para escolher nome do arquivo
        callback(null, `${Date.now()}_${file.originalname}`)//callback para qual nome do arquivo padrão na Date.now:data atual
    }
})

const upload = multer({ storage }).single('arquivo')//const upload recebe multer storage:objeto, recebe arquivo

app.post('/upload', (req, res) => {//via post pra fazer upload desse arquivo
    upload(req, res, err => {//(requisição, resposta, erro)
        if (err) {//se der erro..
            return res.end('Ocorreu um erro.')//retorna
        }

        res.end('Concluído com sucesso.')//caso nao tenha erro..
    })
})

app.post('/formulario', (req, res) => {//para fetch2
    res.send({
        ...req.body,//...tudo q veio no body na resposta joga no obj e adiciona mais um id
        id: 7
    })
})
//Middleware é todo o tipo de função que está entre um pedido HTTP e a resposta final que o servidor envia de volta para o cliente
app.get('/parOuImpar', (req, res) => {//url parouimpar
    // req.body
    // req.query
    // req.params // outras opçoes
    const par = parseInt(req.query.numero) % 2 === 0 //parseInt converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN .
    res.send({//se o resto for 0 é par se não é impar
        resultado: par ? 'par' : 'impar'//resultado se par ou impar
    })
})

app.listen(8080, () => console.log('Executando...'))//ouvir na porta 8080,, caso de erro startando npm start no terminal coloca 8081..executando saida