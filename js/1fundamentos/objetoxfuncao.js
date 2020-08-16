console.log(typeof Object)//função
console.log(typeof new Object)//typeof=objeto criado apartir de uma função

const Cliente = function() {}
console.log(typeof Cliente)//criou função
console.log(typeof new Cliente)//criou objeto

class Produto {} // ES 2015 (ES6) //instancias apartir de uma classe
console.log(typeof Produto)//função
console.log(typeof new Produto())//objeto