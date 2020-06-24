// não aceita repetição/não indexada
const times = new Set()//instancia metodo set
times.add('Vasco')//add adiciona times 
times.add('São Paulo').add('Palmeiras').add('Corinthians')//adicionando encadeado msm coisa
times.add('Flamengo')
times.add('Vasco')//ignora vasco pois repetido

console.log(times)//Set { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size)//size..5 ..elementos diferente no caso
console.log(times.has('vasco'))//letra minuscula .. false
console.log(times.has('Vasco'))//true
times.delete('Flamengo')//deleta flamengo
console.log(times.has('Flamengo'))//false foi deletado

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)//nao aceitando repetição abaixo fica:
console.log(nomesSet)//Set { 'Raquel', 'Lucas', 'Julia' }

/*Set são coleções de valores nas quais é possível iterar os elementos em ordem de inserção. */