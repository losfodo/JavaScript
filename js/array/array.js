console.log(typeof Array, typeof new Array, typeof [])//typeof=function,,new:obj,,typeof []:array literal é obj
//array é uma estrutura heterogenia int boolean let outro array
let aprovados = new Array('Bia', 'Carlos', 'Ana')//array valido mas nao recomendada
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])//acessando primeiro elemento array bia
console.log(aprovados[1])//segundo agr
console.log(aprovados[2])
console.log(aprovados[3])//n existe um quarto.. undefined

aprovados[3] = 'Paulo'//cria um quarto array novo
aprovados.push('Abia')//cria outro elemento array com push
console.log(aprovados.length)//lenght: total tem 5 elementos

aprovados[9] = 'Rafael'//entre 5 6 7 8 ficam undefined,, cria o 9 rafael
console.log(aprovados.length)//total agr 10
console.log(aprovados[8] === undefined)//true

console.log(aprovados)//sai todos até undefined na ordem
aprovados.sort()//altera array ordem alfabetica
console.log(aprovados)//saida ordem alfabetica

delete aprovados[1]//delete: deixa elemento segundo undefined mas nao deleta
console.log(aprovados[1])//undefined
console.log(aprovados[2])//terceiro da ordem alfabetica

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2)//splice:adicionar elementos num determinado indice(1:indice q quer trabalhar carlos para excluir,2 e no indice ana excluir tbm elemento apenas)
console.log(aprovados)//saida splice.. [ 'Bia' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1,'Elemento1','Elemento2')//nesse caso no lugar de carlos fica o 'Elemento1', 'Elemento2'
console.log(aprovados)//[ 'Bia', 'Elemento1', 'Elemento2', 'Ana' ]