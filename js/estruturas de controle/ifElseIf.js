Number.prototype.entre = function (inicio, fim) {//number=numero,prototype:prototipo de objeto,entre:parametro, function possui: incio, fim
    return this >= inicio && this <= fim//return this number >=inicio e thisnumber <= fim
}

const imprimirResultado = function (nota) {//cinst imprimirresultado: saida dados, function:nota=chamar função abaixo
    if (nota.entre(9, 10)) {//se fot 9 e 10
        console.log('Quadro de Honra')//saida..
    } else if(nota.entre(7, 8.99)) {//se não se for 7 e 8.99
        console.log('Aprovado')//aprova...
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {//se não for nenhum acima nota invalida
        console.log('Nota inválida')
    }
    console.log('fim')//dentro do parametro sem else e if sempre imprime em um de cada
}

console.log('começo')//fora do parametro acima dos abaixos imprime primeiro

imprimirResultado(10)//saida da const ante
imprimirResultado(8.9)
console.log('tem q melhorar abaixo:')//saida no meio dos ressultados
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
