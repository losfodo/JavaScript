function MeuObjeto() {}
console.log(MeuObjeto.prototype)//A propriedade Object.prototype representa o Object protótipo do objeto.

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)//true obj1 e obj2 criados na msm função tem msm prototipo __proto
console.log(MeuObjeto.prototype === obj1.__proto__)//true    __proto__=obj, como o obj diferencia o seu prototipo

MeuObjeto.prototype.nome = 'Anônimo'//funçãoMeuobj.prototype.atributo nome = recebe'anonimo'
MeuObjeto.prototype.falar = function() {//q recebe função
    console.log(`Bom dia! Meu nome é ${this.nome}!`)//como vai sair this.nome=anonimo
}

obj1.falar()//saida em si.. Bom dia! Meu nome é anonimo

obj2.nome = 'Rafael'
obj2.falar() //Bom dia! Meu nome é Rafael

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()//recebe,, Bom dia! Meu nome é Obj3!

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)//atributo existe mas referencia nula