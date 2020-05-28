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

const criarPessoa = nome => {//mais resumido..
    return {
        falar: () => console.log(`Meu nome é ${nome}`)//console alocado
    }
}

const p2 = criarPessoa('João')//pessoa criada
p2.falar()//saida liberada..


/*class=Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto. 
No Javascript utilizamos uma função para criar a classe.*/

/*constructor= O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.*/