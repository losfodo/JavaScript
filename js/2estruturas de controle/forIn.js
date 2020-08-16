  
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]//array

for (let i in notas) { //for in= da as notas e tbm o indice ou atributos do array ex: 0 6.7   1 7.4 ...

    console.log(i, notas[i])
}

const pessoa = { //constante pessoa
    nome: 'Ana',//atributos
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {//let atributo nome idade sobren.. , in= pessoa ana silva 29
    console.log(`${atributo} = ${pessoa[atributo]}`) //saida tipo nome = ana
}