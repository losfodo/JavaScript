const peso1 = 1.1
const peso2 = Number('2.0')


console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//isInteger:mostra q é false um numero quebrado ou float
console.log(Number.isInteger(peso2))//isInteger:mostra q é true um numero inteiro

const avaliacao1 = 9.826
const avaliacao2 = 6.71

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//toFixed:diminuir quantidade de numeros quebrados 7,82
console.log(media.toString(2))//converte o valor para binario com tostring(2)
console.log(media.toString())//retorna como sendo uma string sendo numenro ou nao
console.log(typeof media)//aqui apenas undefined
console.log(typeof Number)//number n maiusculo é função

console.log("calculos estranhos abaixos:")
console.log(7/0)//7 dividido p 0 no js da infinity
console.log("10"/2); //da 5 msm com string
console.log("show"*2) // nan mas não da erro
console.log(0.1 + 0.7)// 0.79999999 ao inves de 0.8
console.log((10.345).toFixed(2))//10.35
console.log('3' + 2)//concatena e não soma prioridade a string = 32
console.log('3' - 2)//se for menos subtrai=1

/*uso do Math= */
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)//Math.PI=3.14159 * Math.pow=calcula a potencia 5.6²

console.log("uso do Math: ", area)//const area resultado calc
console.log(typeof Math)//math é um objeto