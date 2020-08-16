const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {//filter= recebe callback 3 parametro element,index,array
    return false //return false fica.. [] pq return filtra produtos e se for true sai produtos completo
}))//return p.preco > 2400 = return preço acima de 2400 apenas os acima saem filtrados

const caro = produto => produto.preco >= 500//cria função caro = produto função preço maior igual 500 filtrando
const fragil = produto => produto.fragil //sair apenas os q são fragil

console.log(produtos.filter(caro).filter(fragil))//saida..filter=filtrar apenas produtos q são caro e fragil tbm

/*Filter recebe como parâmetro uma função de callback,
 onde o retorno dado será um novo array com os elementos que passaram na validação realizada. */