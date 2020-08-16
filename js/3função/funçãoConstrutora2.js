function Pessoa(nome) {//troca class por function
    this.nome = nome
    
    this.falar = function() {//pra ficar na instancia criada coloca o this.obj = function()
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')//pessoa criada
p1.falar()//saida ativação.. meu nome é joão
console.log(p1.nome)//sai apenas o nome.. joão


/*transformando acima em uma função construtora a de baixo q é uma class *//*
class Pessoa {
    constructor(nome) {//constructor=para inicializar as variaveis
        this.nome = nome
    }

    falar() {//função falar..
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')//const p1 instanciada a new pessoa
p1.falar()//meu nome é joão
*/