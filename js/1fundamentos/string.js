const escola = "Cod3r"//contado de 0,1,2,3,4,, string

console.log(escola.charAt(4))//charAt 4:retorna letra 'r' 4° letra
console.log(escola.charAt(5))//retorna nada pq são max 4 letras, mas ñ da erro
console.log(escola.charCodeAt(3))//valor 3 de cod'3'r dentro da tabela asp unicode é 51
console.log(escola.indexOf('d'))//mostrar se tem letras o number em qual posição esta se der -1 é pq ñ tem

console.log(escola.substring(1))//escreve do algoritmo 1 para frente
console.log(escola.substring(0, 3))// mostra do 0 até 3 'cod'

console.log('Escola '.concat(escola).concat("!"))//juntar palavras string Escola cod3r!
console.log('Escola ' + escola + "!")// juntar usando + ,, mesma coisa de cima

console.log(escola.replace(3, 'e'))//replace=substitui o 3 pelo e : ficaria coder
console.log(escola.replace(/\w/g, 'e'))//substitui por tu eeeee

console.log('Ana,Maria,Pedro'.split(/,/))//split,=converte string para array 3 elementos independent
console.log('Ana,Maria,Pedro'.split(/./))//com ponto é diferente caso especial

//concatenando strings..
const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!' //uso da concatenação comum

const template = `linha1
linha2.
Olá ${nome}!`//uso do template para concatenar,, é possivel mais linhas no console
console.log(concatenacao, template )

console.log(`1+1 = ${1+1}`)//dentro do $ ele soma expressão

const up = texto => texto.toUpperCase()//função up = texto(string),,toUpperCase() retorna o valor da string chamada convertida para maiúscula.
console.log(`Ei... ${up('cuidado')}`)//deixa cuidado com letra maiuscula apenas



