for (var i = 2; i < 10; i++) {//for(declaração da variavel;condição;incremento)
    console.log(i)//for(declara i=0;i menor 10;i++contagem 1 + 1= 2 até 9)
}

console.log('i =', i)//executa a parada dele 1<10 //com var ele é executado fora do bloco sem problems
console.log('---------------------------')

//usando let no loop for
for (let i = 0; i < 10; i++) {//let executa igual var dentro do escopo
    console.log(i)
}
//console.log('i =', i) //ja fora nao define com let
console.log('--------------------------')

/*usando var em loop */
const funcs = []//var ou const é igual aqui

for (var i = 0; i < 10; i++) {
    funcs.push(function() {//funcs.push=add um novo elemento no array(uma função)
        console.log(i)
    })
}

funcs[2]()//resulta em 10
funcs[8]()//result 10 pq var não tem escopo nao respeitando a regra..

console.log('-------------------------------')

const funcs = []

for (let i = 0; i < 10; i++) {//Significa função tem consciência do local onde foi definida com let
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()//imprimi valor 2 e 6 e 8 com let
funcs[6]()
funcs[8]()