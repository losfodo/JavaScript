// Object.preventExtensions=evitando aumentar a quantidade de produtos do objt
const produto = Object.preventExtensions({//setar obj e colocando produto nao extendido
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'//tem 3 atributos e nao pode colocar mais
})
console.log('Extensível:', Object.isExtensible(produto))//da falso saber se ela é extensiva pode add +

produto.nome = 'Borracha'//alterou os dados oq é permitido 
produto.descricao = 'Borracha escolar branca'//descrição nao tem anteriormente e nao pode add + pq preventExtensions
delete produto.tag//excluir é permitido
console.log(produto)//saida..

// Object.seal=selar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)//seal=nao consegue adicionar novos atributos e nem excluir
console.log('Selado:', Object.isSealed(pessoa))//saber se esta selado

pessoa.sobrenome = 'Silva'//nao pode add +
delete pessoa.nome//tbm n
pessoa.idade = 29//é alteravel 
console.log(pessoa)//saida..

// Object.freeze = selado + valores constantes /*valores constantes nao pode modificar, excluir e adicionar */