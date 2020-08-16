console.log(module.exports)//sai.. {}
console.log(module.exports === this)//true
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null//ignorado pois nulo
console.log(module.exports)//{ a: 1, b: 2, c: 3 }

exports = {//ignorado msm não sendo nulo pois foca no module.exports e .sequencias dela
    nome: 'Teste'
}

console.log(module.exports)//{ a: 1, b: 2, c: 3 }

module.exports = { publico: true }//para ser esportado apenas para outro arquivo deve ser assim olhar exportarClientes