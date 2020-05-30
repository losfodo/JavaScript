const sequence = {
    _id: 1,
    get id() { return this._id++ }//sempre vai retornar id quando for usar o sequence,,chamando atributo dispara função
}

const produtos = {}//constante objeto,, //chave vai ser o id do produto e o valor vai ser o objeto do produto

function salvarProduto(produto) {//cria função
    if (!produto.id) produto.id = sequence.id//se produtoid nao estiver setado faz produtoid receber sequenciaid
    produtos[produto.id] = produto//produto.id recebe produto=se produto estiver setado substitui pela versão mais nova caso nao adiciona novo elemento de produtos
    return produto //produto sempre retorna com id
}

function getProduto(id) {//função pegar produto id como parametro no singular
    return produtos[id] || {}//retorna produto ou se nao tiver objeto vazio
}

function getProdutos() {//no plural
    return Object.values(produtos)//retornar apenas os valores, todos
}

function excluirProduto(id) {//excluir um produto
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }//chamar pra fora do arquivo usando module.exports