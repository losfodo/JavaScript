const fabricantes = ["Mercedes", "Audi", "BMW"]//array

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)//indice+1 add cada array 1.mercedes 2.audi ....
}

fabricantes.forEach(imprimir)//saida console.. //foreach:executa uma dada função em cada elemento de um array.
fabricantes.forEach(fabricante => console.log(fabricante))//fabricante direto impresso