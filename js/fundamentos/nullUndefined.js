let valor // não inicializada da undefined
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro! //toString() retorna uma string representando o objeto Number especificado.

const produto = {}//obj
console.log(produto.preco)//Undefined pq '.preço' não possue
console.log(produto)//retorna Vazio{}

produto.preco = 3.50
console.log(produto)//Agr tem saída complementou preço:3.50

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)//false por ser undefined
// delete produto.preco /*fica deletado{} */
console.log(produto)//undefined

produto.preco = null // sem preço
console.log(!!produto.preco)//null false
console.log(produto)// null