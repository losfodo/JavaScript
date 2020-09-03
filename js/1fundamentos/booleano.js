let isAtivo = false //boolean é true ou false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log("1 !!isAtivo é " + !!isAtivo)//!!=oposto do oposto ou contrario==da true 

isAtivo = 1
console.log(!isAtivo)//da false

isAtivo = 1
console.log(!true)//!=oposto + true=daria false

isAtivo = 1
console.log(!false)//!=não + false=daria true

console.log('verdadeiros abaixo...')
console.log(!!' ')//string com espaço true
console.log('infinity é ' + !!Infinity)//com letra maiuscula começa,,A propriedade global Infinity é um valor numérico que representa infinito.
console.log(!!(isAtivo = true))
console.log(!!(isAtivo=30))

console.log('falsos abaixo...')
console.log(!!0)
console.log(!!'')//sem espaço ou nada escrito false
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('finalizando...')
console.log(!!(''|| null || 0 || ' '))//retorna verdadeiro pq pelo menos 1 deles é vdd ||=ou,,1 ou outro

let nome = ''//se tivesse algo escrito seria retornada
console.log(nome || 'Desconhecido')//retorna nome nenhum então vai desconhecido,,escolha
