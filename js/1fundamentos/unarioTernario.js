let num1 = 1
let num2 = 2

num1++ //forma pos ficçada menos apressada,, acrescenta +1 unidade
console.log(num1)//de 1 vai para 2
--num1//forma pré ficçada prioridade mais apressado para subtrair ou acrecestar,, subtrai -1 numero
console.log(num1)//de 2 volta para 1 novamente

console.log(++num1 === num2--)//true pq o ++ é executado antes de compararar sendo 2 === a 2 de num2 pois o -- só depois de executar a igualdade
console.log(num1 === num2)//1 não é igual a 2


console.log('-------------operador Ternario------------------')

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //const parametronota função.. nota =>maior ou igual a 7 ?'ternario' true'aprova' ou false'reprova
//se a nota for maior ou igual a 7 aprovado se nao reprovado
console.log(resultado(7.1))
console.log(resultado(6.7))

//const status = nota >= 7 ? 'Aprova' : 'Reprova' // como apenas uma constante comum tbm vai.. 