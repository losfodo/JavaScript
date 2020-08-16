const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = [] //novo array
for (let i in notas) {
    if (notas[i] < 7) {//for só executa se for menor q 7 as notas
        notasBaixas1.push(notas[i])//push=para adicionar um elemento do array
    }
}

console.log(notasBaixas1)//saida dados..

// Com callback,, mais resumido
const notasBaixas2 = notas.filter(function (nota) {//filter=filtrar os elementos do array
    return nota < 7 //retornar menor 7
})

console.log(notasBaixas2)//saida..

const notasMenorQue7 = nota => nota < 7//add const
const notasBaixas3 = notas.filter(notasMenorQue7)//mais resumido ainda//const no ()
console.log(notasBaixas3)//saida..