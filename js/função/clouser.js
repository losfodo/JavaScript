// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'//declarado função fora
    function dentro() {
        return x
    }
    return dentro //função fora retorna função dentro
}

const minhaFuncao = fora()//chama função fora
console.log(minhaFuncao())//saida função 'local',, local fisico da função importante e ambos x,,memoria função tem noção do local onde esta com return