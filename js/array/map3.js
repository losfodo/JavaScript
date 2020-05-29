Array.prototype.map2 = function(callback) {
    const newArray = []//cria um array vazio
    for (let i = 0; i < this.length; i++) {//percorre o array original usando this
        newArray.push(callback(this[i], i, this))//chama callback passando elemento atual, indice,array original
    }//this como um atalho, um referente; ou seja, o sujeito no contexto ou o sujeito do código em execução.
    return newArray 
}//ficou igual a map2?

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)