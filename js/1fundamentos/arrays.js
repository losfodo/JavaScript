const valores = [7.7, 8.9, 6.3, 9.2] // array = [0,1,2,3]
console.log(valores[0], valores[3])//0 é primeiro, 3 ultimo
console.log(valores[4])//no js da undefined se não tiver

valores[4] = 10
console.log(valores)//agora possui um indice 4
console.log('total arrays lenght=' + valores.length)//total arrays

valores.push({id:3}, false, null,'teste')//aleatorio no msm array
console.log('aleatorio:' + valores)

console.log('pop: ' + valores.pop())//retorna o ultimo valor do array
delete valores[0]//delete= remove indice 0 primeiro array do console
console.log('deleta indice 0:' + valores)

console.log(typeof valores)//typeof= array é do tipo object