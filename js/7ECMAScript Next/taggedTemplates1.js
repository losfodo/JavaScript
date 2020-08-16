// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {//...valores como ja foi dito 3 postos varios valores
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)

/*sai de forma aleatoria abaixo mas possui uma certa ordem e indice alinhados..
[ '', ' está ', '.' ]
[ 'Gui', 'Aprovado' ]
Outra string */