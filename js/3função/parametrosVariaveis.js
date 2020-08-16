function soma() {//função sem parametro
    let soma = 0//somando..
    for (i in arguments) {
        soma += arguments[i]//arguments é um array interno de uma função
    }
    return soma//resultado de todos os valores passados dos 'arguments=array'
}

console.log(soma())//nenhum argumento numero n entra no for
console.log(soma(1))//sai 1, unico parametro
console.log(soma(1.1, 2.2, 3.3))//soma todos os parametros do array argument //sem limite de restrinção desse jeito..

console.log(soma(1.1, 2.2, "Teste"))//sai no console.. a soma e string
console.log(soma('a', 'b', 'c'))//'0' ja incluso em soma e 'abc'
