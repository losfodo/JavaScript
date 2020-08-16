const a = 1
const b = 2//valores da constante..
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }//mais resumido e moderno q acima
console.log(obj1, obj2)//saida de ambos iguais

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}//dados a colocar.. 
obj3[nomeAttr] = valorAttr //como vai sair
console.log(obj3)//saida console..  { nota: 7.87 }

const obj4 = {[nomeAttr]: valorAttr}//resumindo..
console.log(obj4)

const obj5 = {
    funcao1: function() {//função dentro obj literal
        // ... aqui faz o que quiser fazer em uma função
    },//virgula da sequencia a segunda função2 sendo ela da const obj5 tbm
    funcao2() {//forma nova js resume +
        // ... parametro e pa
    }
}
console.log(obj5)//saida obj5 func1 func2