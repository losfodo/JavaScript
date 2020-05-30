console.log(this === global)//this fora de uma função dentro de um modulo seria..false
console.log(this === module)//false

console.log(this === module.exports)//true
console.log(this === exports)//true

function logThis() {//acessando this dentro da função dentro modulo
    console.log('Dentro de uma função...')
    console.log(this === exports)//false
    console.log(this === module.exports)//false
    console.log(this === global)//this no caso dentro de uma função..true

    //this.perigo = '...' //neste ponto ou seja dentro de uma function this aponta para global
}

//this.perigo = '...' //fora das chaves{} estaria dentro de module.exports

logThis()//chamar a função antes de executar..Dentro de uma função...