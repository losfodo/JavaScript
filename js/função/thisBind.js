const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)//puxa um atributo usando o this
    }
}

pessoa.falar()//executando no console acima
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO,, undefined

const falarDePessoa = pessoa.falar.bind(pessoa)//passa obj não quer que seja resolvido o this //com bind o this sera amarrado ou objeto conectado 
falarDePessoa()//retorna Bom dia!

const falar2 =pessoa.falar//sem o bind da undefined
falar2()//undefined

/*bind part2.. */
function Pessoa() {
    this.idade = 0 //atributo chamado idade

    const self = this//self sempre aponta para pessoa // cria uma constante para acessar os atributos this
    setInterval(function() {//dispara função apartir de um determinado intervalo
        self.idade++ //this.idade++=para incrementar
        console.log(self.idade)//
    }/*.bind(this)*/, 10)//contagem de 10..
}

new Pessoa //instancia saida dos dados