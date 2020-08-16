function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min//usa o random multiplica pelo intervalo dando um range maior
    return Math.floor(valor)
}

let opcao = 0//let opção=number=0 começa pelo 0 e não -1 pq se não iria começa por falso dai
//while:enquanto a espreção for true continua executando até ser false //cuidar dos loops infinitos
while (opcao != -1) {//opção tem q ser diferente de menos 1 para ficar executando // se for -1 ele sai do laço loop
    opcao = getInteiroAleatorioEntre(-1, 10)//opção recebe get -1 a 10 aleatorio
    console.log(`Opção escolhida foi ${opcao}.`)//opçoes de saida de dados.. até a para -1
}

console.log('Até a próxima!')