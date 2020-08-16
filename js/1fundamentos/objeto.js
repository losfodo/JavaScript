const prod1= {}//{}par de chaves representa um objeto,, objeto vazio
prod1.nome = 'Celular Ultra Mega'//produto do objeto
prod1.preco = 4998.90//ou atributos do objeto
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)//objeto=conjunto de objetos em uma constante  ou variavel

const prod2 = {//outra forma de faer objeto
    nome: 'Camisa Polo',
    preco: 79.90
}//conjunto de pares valor,,chaves dentro de chaves no objeto

console.log(prod2)

d=4
d++ //adiciona +1 numero a mais fica 5
console.log('uso do ++: ' + d)