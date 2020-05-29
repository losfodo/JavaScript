Array.prototype.forEach2 = function(callback) {//função passada callback
    for (let i = 0; i < this.length; i++) {//laço for(let i recebe 0;i menor length comprimento array;i++contagem)
        callback(this[i], i, this)//callback this indice [i] e segundo proprio i, this array completo
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

/*saida sera= 1) Agatha
2) Aldo
3) Daniel
4) Raquel */

/*Callback é uma função que é usada como "callback". Ela é tipicamente passada como argumento de outra função 
e/ou chamada quando um evento for acontecido, 
ou quando uma parte de código receber uma resposta de que estava à espera. */