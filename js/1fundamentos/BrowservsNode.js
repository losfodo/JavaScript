/*console.log("--------digitando dentro do console.log---------")
window // varios atributos .. window é quando voce se refere a pagina que vc esta usando
this ===window
this //chama window tbm

var a ="Texto"//recebe acesso a variavel texto
var a = 123 // digitando no texto 123..
window.a // vai no texto tbm

let b = 123 // digitou 123 no b
window.b // undefined pois é let, msm sendo global
// se tenta declarar b denovo da erro pois ja tem let b ali né,, com let duas vezes da um problema

cons c = 456 // 
window.c //undefined tbm

function f1() {return this === window}
f1() //true é anexada no window

let pessoa = {nome: 'Ana',falar: function(){return 'eu sou ${this.nome}' }}
pessoa.falar //"eu sou ana"
this.nome //undefined

pessoa.verificarescopo = function(){return this === window}
//f() {return this === window}
pessoa.verificarescopo()
false//this nao é igual ao window e sim igual pessoa*/

let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)//acessando com global b
console.log(this.c)//acessa pq esta como this
console.log(module.exports.c)//sai 456 exporta modulo
console.log(module.exports=== this)//true
console.log(module.exports)// sai resultado c d e

//criando variavel sem var ou let
abc = 3//criando uma variavel no node global,, nao fazer isto!!
console.log(global.abc)//fugir do escopo global.. pode enrola o codigo fonte

// module.exports = { e: 456, f: false, g: 'teste' }