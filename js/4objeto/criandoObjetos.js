// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras,, construra parecida em parts com obj js acima..
function Produto(nome, preco, desc) {//preço,desconto ficam encapsulado privado
    this.nome = nome //com uso do this fica publico
    this.getPrecoComDesconto = () => { //função
        return preco * (1 - desc)//return calculo preço com desconto
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)//colocando produtos novos..
const p2 = new Produto('Notebook', 2998.99, 0.25)//preço,desconto
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())//p1 e p2 a função q possui retorno de desconoto..

// Função Factory ,, factory usa se tanto construtora com aliteral
function criarFuncionario(nome, salarioBase, faltas) {//função
    return {//retorno dela com..
        nome,//objetos literais parametros dos funcionarios.
        salarioBase,
        faltas,
        getSalario() {//mais uma função dentro da função em si
            return (salarioBase / 30) * (30 - faltas)//return com os calc..
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)//criando funcionarios com dados..
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())//saida f1 e f2.(getsalario=função interna com calculo salario base e faltas)

// Object.create
const filha = Object.create(null)//create mais pra frente para adicionais
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')//json:strig objeto,, parse:parcial
console.log(fromJSON.info)//converteu texto em objeto 