console.log(typeof Object)

class Produto {}//obj no js é uma função
console.log(typeof Produto)

// Funcao sem retorno   //Função é o mais importante em js
function imprimirSoma(a, b) {//function Recebe parâmetro a e b
    console.log(a + b)
}

imprimirSoma(2, 3)//parâmetros 2=a + 3=b =5
imprimirSoma(2)//Nan nada
imprimirSoma(2, 10, 4, 5, 6, 7, 8)//soma os dois primeiros e ignora os outros
imprimirSoma()//retorna nan not a number

// Funcao com retorno
function soma(a, b = 1) {//1 é valor comum caso falte um numero da function
    return a + b//o retorno da função
}

console.log(soma(2, 3))//soma 2+3=5
console.log(soma(2))//2+valor comum 1=3
console.log(soma())//nan

// Armazenando uma funcao em uma variavel  //Função anônima sem nome
const imprimirSomar = function (a, b) { //Armazenar a função em uma variável em js
    console.log(a + b)
}

imprimirSomar(2, 3)

// Armazenando uma funcao arrow em uma variavel,, variavel nao pode ter nome igual a function se não da erro
const some = (a, b) => { //Seta => substitui o nome function=função
    return a + b
}

console.log(some(2, 3))//saida console soma 2+3 = 5

// retorno implícito
const subtracao = (a, b) => a - b //Function mais resumido ainda em code
console.log(subtracao(2, 3))//saida dados

const imprimir2 = a => console.log(a)//Como é um parâmetro só ñ precisa parênteses
imprimir2('Legal!!!')//saida para console