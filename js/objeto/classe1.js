class Lancamento {//Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto. No Javascript utilizamos uma função para criar a classe.
    constructor(nome = 'Genérico', valor = 0) {//O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe
        this.nome = nome//this nome parametro do construtor vai receber
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []//recebe um array vazio n tem construtor
    }

    addLancamentos(...lancamentos) {//função,, ...lançamentos aceita parametros variaveis
        lancamentos.forEach(l => this.lancamentos.push(l))//forEach(), método que permite executar uma função para cada item de um array. 
    }//da push no array qq pertence obj acima lançamentos

    sumario() {//metodo
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor//acrescenta valor consolidado todos os itens valor >>
        })
        return valorConsolidado //retornando
    }
}

const salario = new Lancamento('Salario', 45000)//cria lançamento
const contaDeLuz = new Lancamento('Luz', -220)//conta luz criada

const contas = new CicloFinanceiro(6, 2018)//ciclofinanceiro.. a classe acima mes e ano e onde possui o array lançamento
contas.addLancamentos(salario, contaDeLuz)//...lancamentos aceita os dois atributos
console.log(contas.sumario())//sumario o metodo retorna no caluclo salario - luz =44780