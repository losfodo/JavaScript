const moduloA = require('./moduloA')//para executar um node exports tem que usar o require(./moduloA: esta na mesma pasta)
const moduloB = require('./moduloB')

console.log(moduloA.ola)//saida dos modulos um por um
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)//saida de todos os modulos de A

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())//chamando a função usa parenteses()
console.log(moduloB)//sai.. { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }

/*O sistema de módulos do Node.js é responsável por criar o objeto module.export e o export aponta para esse objeto,
 podendo ser usado para retornar funções e objetos bastando somente adicioná-los ao export. com um require da a saida do module.exports */