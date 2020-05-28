// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }//(parametro){bloco corpo da função}

// Armazenar em uma variável a função
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2] //forma direta função array
console.log(array[0](2, 3))//soma 2 + 3=5

// Armazenar em um atributo de objeto
const obj = {}//cria obj vazio
obj.falar = function () { return 'Opa' }//cria obj falar q retorna opa
console.log(obj.falar())//saida: opa

// Passar função como param
function run(fun) {
    fun()//função com parametro para outra função
}

run(function () { console.log('Executando...') })

// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {//adicionando parametro c a soma a+b+c
        console.log(a + b + c)
    }
}

soma(2, 3)(4)//saida de a+b+c=9
const cincoMais = soma(2, 3)//saindo 9
cincoMais(4)//const cincomais=4= c 