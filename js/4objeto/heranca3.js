const pai = { nome: 'Pedro', corCabelo: 'preto' }
//Object.create() cria um novo objeto, utilizando um outro objecto existente como protótipo para o novo objeto a ser criado.
const filha1 = Object.create(pai) //criou o obj filha com create tendo proposito o obj pai
filha1.nome = 'Ana'//parametro..
console.log(filha1.corCabelo)//sai preto parametro do pai para filha

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }//atributos filha 2 e detalhes ajustes..
})

console.log(filha2.nome)
filha2.nome = 'Carla'//tenta mudar o nome filha 2 mas writable false nao permite isso
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))//keys como nome apenas.. se enumerable: false nao apareceria nome pq não pode ser mencionado
console.log(Object.keys(filha2))

for(let key in filha2) {//todos os atributos sendo impressos
    filha2.hasOwnProperty(key) ?//hasOwnProperty=aquela propriedade pertence a ela
        console.log(key) : console.log(`Por herança: ${key}`)//saber se determinado atributo vem
}