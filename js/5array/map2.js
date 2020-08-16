const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',//aspas simples e duplas dentro formato json
    '{ "nome": "Caderno", "preco": 13.90 }',//como 13.90 é number fica sem aspas duplas
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)//converter texto para objeto com json.parse, recebe objt como entrada e tem array apenas preços
const apenasPreco = produto => produto.preco //criou const apenaspreço

const resultado = carrinho.map(paraObjeto).map(apenasPreco)// resultado recebe carrinho=const principal.map=(paraobjeto para converter) outro map=para estrair apenas o preço
console.log(resultado)//saida.. [ 3.45, 13.9, 41.22, 7.5 ]