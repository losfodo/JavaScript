const tecnologias = new Map()//instanciou o map:mapa simples de chave/valor. Qualquer valor (objeto e valores primitivos) pode ser usado como uma chave ou um valor.
tecnologias.set('react', { framework: false })//Set são coleções de valores nas quais é possível iterar os elementos em ordem de inserção.
tecnologias.set('angular', { framework: true })//obj dizendo se é framework ou não

console.log(tecnologias.react)//undefined forma incorreta
console.log(tecnologias.get('react').framework)//forma correta..false

const chavesVariadas = new Map([
    [function () { }, 'Função'],//primeiro array função como chave espaço
    [{}, 'Objeto'],//segundo array obj como {} vazio
    [123, 'Número'],//terceiro array chave numerico
])

chavesVariadas.forEach((vl, ch) => {//valor chave
    console.log(ch, vl)//saida..[Function] Função, {} Objeto, 123 Número
})

console.log(chavesVariadas.has(123))//has: saber se a chave existe ou não..true
chavesVariadas.delete(123)//excluir a chave do map
console.log(chavesVariadas.has(123))//no caso abaixo é false pois foi excluido
console.log(chavesVariadas.size)//size quantas chaves poussui atual 2

chavesVariadas.set(123, 'a')//chave não aceita variação mas string valores sim
chavesVariadas.set(123, 'b')//Map { [Function] => 'Função', {} => 'Objeto', 123 => 'b', 456 => 'b' }
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)

/*map() invoca a função callback passada por argumento para cada elemento do Array
 e devolve um novo Array como resultado. */