const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!,, pop remove o último elemento de um array 
console.log(pilotos)

pilotos.push('Verstappen')//push: adiciona um novo elemento no array
console.log(pilotos)//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() //shift=remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')//unshift=adiciona um ou mais elementos no início de um array
console.log(pilotos)

// splice:pode adicionar e remover elementos

// adicionar
pilotos.splice(3, 0, 'Bottas', 'Massa')//splice(3=adiciona na terceira posição array lista, 0=não removera ninguem,dois adicionados='Bottas', 'Massa')
console.log(pilotos)//[ 'Hamilton', 'Alonso', 'Raikkonen', 'Bottas', 'Massa', 'Verstappen' ]

// remover
pilotos.splice(3, 1) // bottas quebrou :( ,, splice(3no indice tres, 1=um remove )
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array,, slice apenas mostra do 2 para frente
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//slice: apenas mostra nao remove nem coloca(1motra do indice um até,o indice tres 4)
console.log(algunsPilotos2)//[ 'Alonso', 'Raikkonen', 'Massa' ]