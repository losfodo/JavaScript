const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {//switch:casos,math.floor aredonda nota para baixo,
        case 10://caso no for 10
        case 9:
            console.log('Quadro de Honra')//saida dos dois cases acima
            break //break:coloca se para não ter mais de uma execução do switch// sem o break executa numeros de cima para baixo..
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4://case 0,8 0,3 nao pode.. entre 5 e 10 tbm nao limitaçoes js
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default://default se n for nenhum acima ou numero invalido cai nesse
            console.log('Nota inválida')//saida default..
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)