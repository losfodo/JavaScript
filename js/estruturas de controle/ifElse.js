const imprimirResultado = function(nota) {
    if(nota >= 7) {//se for maior ou igual a 7 aprovado
        console.log('Aprovado!')
    } else {//else se não reprovado
        console.log('Reprovado!')
    }
}

imprimirResultado(10)//aprovado
imprimirResultado(4)//reprovado
imprimirResultado('Epa!') // cuidado!!! //imprime reprovado assim pq n é maior nem igual a 7