// Arrow Function: funçoes de uma unica linha
const soma = (a, b) => a + b //cria const (parametros), função arrow, a+b return
console.log(soma(2, 3))//5

// Arrow Function (this):this do arrow é associado ao local ao qual ela foi escrita
const lexico1 = () => console.log(this === exports)//const lexico1 vai aponta this igual module.exports..true
const lexico2 = lexico1.bind({})//bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido
lexico1()               //lembrando module exports serve para transportar para um require  
lexico2()//true

// parametro default:definir valor padrão para ele
function log(texto = 'Node') {
    console.log(texto)//sai.. node
}

//log() //sai.. node
log('Sou mais forte') //modifica de node para sou mais forte

// operador rest:ter parametros variaveis na chamada da função q são agrupados em um array ou  nos permite representar um número indefinido de argumentos como um array.
function total(...numeros) {//função com numeros
    let total = 0
    numeros.forEach(n => total += n)//total + soma+soma,, forEach() executa uma dada função em cada elemento de um array.
    return total
}
console.log(total(2, 3, 4, 5))//total 14