// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa! ,,global n recomendado cuidado!

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }//pai tem como proto:avo "herança"
const filho = { __proto__: pai, attr3: 'C' }//filho tem proto pai.. e c
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)//filho.attr1= sai A pq tem no proto:pai do proto:avo
//filho.attr0=nao possui em nenhum proto ou filho mas tem separado saindo da ordem logica,filho.attr3:prioridade sai filho msm tendo pai..

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {//para acelerar
        if (this.velAtual + delta <= this.velMax) {//se delta add vel for menor ou igual a vel maxima..
            this.velAtual += delta//executa ou aumenta vel
        } else {//senão se acabar ultrapassando mantem maxima
            this.velAtual = this.velMax
        }
    },
    status() {//função chamada status
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`//retorno dela organizando nesta função
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing,, sombreamento variavel mais abrangente q padrão 200km do carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`//sobreando status em si no return
    }           //super=chamar metodo do prototipo por isso necessario o super
}

Object.setPrototypeOf(ferrari, carro)//estabelecer prototipo(ferrari em si,carro:prototipo geral)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)//saida..
console.log(volvo)

volvo.acelerarMais(100)//velocidade colocada volvo 100 de 200 padrao carro
console.log(volvo.status())//saida..

ferrari.acelerarMais(300)
console.log(ferrari.status())
