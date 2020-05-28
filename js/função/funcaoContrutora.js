function Carro(velocidadeMaxima = 200, delta = 5) {//(valores padrão)
    // atributo privado
    let velocidadeAtual = 0 //atributo interno da função q pertence ao carro apenas,,nao tem como acessar diretamente

    // metodo publico,, apartir do this
    this.acelerar = function () { // uso do this.acelerar... aumenta 5 em 5
        if (velocidadeAtual + delta <= velocidadeMaxima) {//se velocatual + delta for menor ou igual a velmaxima
            velocidadeAtual += delta//pode acrescentar a velocidade atual a delta
        } else {
            velocidadeAtual = velocidadeMaxima//senão atual = maxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual // cria função para controlar a velocidade atual exemplo nao ultrapassar a maxima
    }
}

const uno = new Carro //cria carro uno
uno.acelerar()//aumenta +5 o uno
console.log(uno.getVelocidadeAtual()) //saida console velocidade atual é 5

const ferrari = new Carro(350, 20) //maxima 350
ferrari.acelerar()
ferrari.acelerar()//20 em 20
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())// saida 60

console.log(typeof Carro) // carro em si função
console.log(typeof ferrari)//ferrari e uno é objeto ou orientado em objeto