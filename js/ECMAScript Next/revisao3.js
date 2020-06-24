// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))//sai só os valores do obj..[ 1, 2, 3 ]
console.log(Object.entries(obj))//completo..[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log(Object.keys(obj))//[ 'a', 'b', 'c' ]

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
       return 'Oi gente!' 
    }
}

console.log(pessoa.nome, pessoa.ola())//carla nome retornou  oi gente.. carla oi gente!

// Class
class Animal {}//classe exemplo
class Cachorro extends Animal {//cachorro é uma extensão de animal
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())//Au au!