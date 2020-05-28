const pessoa = {//obj
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//Object.keys: pega todas as chaves do objeto,,exemp: nome idade peso
console.log(Object.values(pessoa))//values apenas valores rebeca 2 e 13
console.log(Object.entries(pessoa))//entries: saida array da keys e values

Object.entries(pessoa).forEach(([chave, valor]) => {//foreach: percorrer o array
    console.log(`${chave}: ${valor}`)//saida..
})

Object.defineProperty(pessoa, 'dataNascimento', {//defineProperty: quer definir uma propriedade do objeto,,target alvo:pessoa, noeme da propr:datanascime
    enumerable: true, //enumerable=se vai ser listado ou mencianado quando quiser,, ex:obj.keys ele sera listado
    writable: false,//writable=se permite ser alterada ou não ,,false no caso não
    value: '01/01/2019'//valor variavel propriedade
})

pessoa.dataNascimento = '01/01/2017'//como writeble false esse nao tem saida
console.log(pessoa.dataNascimento)//saida console defineproperty
console.log(Object.keys(pessoa))//listou pq true enumrable

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }//obj e atributo
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }//o2 a:4 sobrescreveu o valor de a modificou para 4
const obj = Object.assign(dest, o1, o2)//assign:pega obj dest q vai receber os outros o1 o2

Object.freeze(obj)//congela obj
obj.c = 1234//congelado nao tem saida neste
console.log(obj)//console..