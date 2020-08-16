const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'fulanos') //concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro.
console.log(todos, filhas, filhos)//[ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei', 'fulanos' ] [ 'Ualeskah', 'Cibalena' ] [ 'Uoxiton', 'Uesclei' ]

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))//sai.. [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
