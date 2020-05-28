function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1//geral de todos os produtos q colocar no console
    }
}

console.log(criarProduto('Notebook', 2199.49))//dados do produto na saida 
console.log(criarProduto('iPad', 1199.49))