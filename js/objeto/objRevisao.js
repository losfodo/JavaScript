// coleção dinâmica de pares chave/valor
const produto = new Object //construtora que instandcia obj 
produto.nome = 'Cadeira' // produto.nome recebe cadeira
produto['marca do produto'] = 'Generica' //cochetes acesso array no produto
produto.preco = 220

console.log(produto) //saida console produto n aparece apartir do ponto para frente..
delete produto.preco//deleta o preço e marca
delete produto['marca do produto']
console.log(produto)// saida com delete..

const carro = {//const
    modelo: 'A4',//parametros modelo: 'A4'.. sai tudo pelo console
    valor: 89000,
    proprietario: {//detalhes proprietario.. dentro chaves
        nome: 'Raul',
        idade: 56,
        endereco: {//detalhes endereço..
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{//array objs com parametros..
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],//fecha array
    calcularValorSeguro: function() {//funçoes dentro tbm possivel
        // ...
    }
}

carro.proprietario.endereco.numero = 1000//acessar atributos apartir dos pontos .. recebe 1000 numero endereço modificado
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' //procura propri,ende pra chegar mudar de dentro para av gigante logradouro
console.log(carro)//saida..

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro //deletando
console.log(carro) //saida com deletados
console.log(carro.condutores) //condutores = mostra só os motoristas dados
console.log(carro.condutores.length)//contagem total de condutores..