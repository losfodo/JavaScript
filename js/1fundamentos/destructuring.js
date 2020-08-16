// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,//dados pessoa..
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // const {coloca operador destructuring tirar dentro obj}recebe pessoa
console.log(nome, idade)//imprime= ana  5

const { nome: n, idade: i } = pessoa //criando variaveis letra 'n' 'i' receber pessoa
console.log(n, i)//imprime igual= ana 5

const { sobrenome, bemHumorada = true } = pessoa 
console.log(sobrenome, bemHumorada) //imprime: undefined=não existe este obj true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)//imprime normal.. cep não possui da: undefined

//const { conta: { ag, num } } = pessoa // em conta da erro pois nao possue const em si
//console.log(ag, num)
console.log('-------------------------------')

const [a] = [10] //recebe 10
console.log(a)//executa 10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]//n1=10, n2=nada, n3=9...
console.log(n1, n3, n5, n6)// se tivesse um n2 daria erro

const [, [,nota ]] = [[, 8, 8], [9, 6, 8]]//const pega sedunda cochete[[ da segunda virgula,6,...
console.log(nota)//saida 6

console.log('-------------------------------')


function rand({ min = 0, max = 1000 }) {//função retorna numero aleatorio 0 a 1000
    const valor = Math.random() * (max - min) + min//numero aleatorio
    return Math.floor(valor)//retorna flor=menor possivel de numero quebrado
}

const obj = { max: 50, min: 40 }//constante 50 a 40 limite aleatorio
console.log(rand(obj))//saida da const obj
console.log(rand({ min: 955 }))//minimo 955 a 1000
console.log(rand({}))//0 a 1000 
//console.log(rand()) //gera erro pq estrutura algo undefined ou nada

console.log('-------------------------------')


function rando([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]//inverte com destruct preciso ser assim
    const valor = Math.random() * (max - min) + min //max+min)somando com min pra dar sempre entre valor maximo
    return Math.floor(valor)
}

console.log(rando([50, 40]))// +resumido q anteriores entre 50 e 40 aleatorio
console.log(rando([992]))//992 até 1000 aleatorio
console.log(rando([, 10]))// 0 a 10
console.log(rando([]))// 0 a 1000
//console.log(rando()) //da erro assim