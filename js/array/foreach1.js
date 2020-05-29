const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice,array) {//forEach()= permite executar uma função para cada item de um array.
    console.log(`${indice + 1}) ${nome}`)//template string=`${indice +.. //1) Agatha 2) Aldo 3) Daniel..
console.log(array)//cada nome com indice mostra um array completo abaixo
})

aprovados.forEach(nome => console.log(nome))//agatha aldo .. apenas o nome

const exibirAprovados = aprovado => console.log(aprovado)//armazena variavel
aprovados.forEach(exibirAprovados)// e mostra no foreach exibirAprovados
