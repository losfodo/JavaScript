const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }//nao exatamente array
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {//simular um array com tostring
    value: function() { return Object.values(this) },//valor recebe uma function  q retorna obj.values=retorna objetos com this
    enumerable: false //enumerable:Propriedades enumeráveis aparecem em for...in loops ou  seja nao sai a lista enumerada
})//object.values() retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto.

console.log(quaseArray[0])//sai.. Rafael

const meuArray = ['Rafael', 'Ana', 'Bia']//array 
console.log(quaseArray.toString(), meuArray)//tostring sai=[ 'Rafael', 'Ana', 'Bia' ] array em si=[ 'Rafael', 'Ana', 'Bia' ]
