const soma = function (x, y) {//função anonima é uma função sem nome
    return x + y 
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))//chama operação com parametros
}

imprimirResultado(3, 4)//dados de a e b,, 7
imprimirResultado(3, 4, soma)//da 7 tbm
imprimirResultado(3, 4, function (x, y) {//passar a função anonima para outra função
    return x - y//retornando 3-4..=-1
})
imprimirResultado(3, 4, (x, y) => x * y)//passando operação multiplicação agr

const pessoa = {
    falar: function () {//função dentro do objeto
        console.log('Opa')
    }
}

pessoa.falar()//opa