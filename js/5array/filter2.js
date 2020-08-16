Array.prototype.filter2 = function(callback) {//filter: filtrar elementos
    const newArray = []//cria novo array..
    for (let i = 0; i < this.length; i++) {//laço for para percorrer array,,i=0;i menor tamanho array;i++ paara percorrer
        if(callback(this[i], i, this)) {//faz test if chama callback passa indice 'i' e array this
            newArray.push(this[i])//se for true callback coloca resultado push no array final
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))//saida igual a filter1