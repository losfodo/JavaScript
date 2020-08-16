// pessoa -> 123 -> {...},, endereço de memoria
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)//sai pedro , pois esta logo acima e mais proximo

// pessoa -> 456 -> {...}  //tentando variavel pessoa aponte para um novo endereço456 para objeto
// pessoa = { nome: 'Ana' } // da erro

Object.freeze(pessoa)//freeze=congela pessoa abaixo não tem saida seja quantas for

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })//fixar na tl joão e apenas joão 
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)