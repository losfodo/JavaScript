function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1//pode colocar o -1 pq o do ira executar de qualquer maneira

do {//do é executado de qualquer jeito
    opcao = getInteiroAleatorioEntre(-1, 10)//
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)//depois vem a sequenci while até encontrar o -1

console.log('Até a próxima!')