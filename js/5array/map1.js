const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {//map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
    return e * 2//retorna o dobro,, vezes 2
})//nums é array original e .map gera um novo array *2

console.log(resultado)//[ 2, 4, 6, 8, 10 ]

const soma10 = e => e + 10//soma10 recebe e=elemento função elemento +10
const triplo = e => e * 3                      /*('.', ',')e substituir ponto com virgula */
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`//toFixed(2)coloca duas casas decimais q formata um número utilizando notação de ponto fixo.
//parseFloat analisa um argumento string, e retorna um numero de ponto flutuante.,, replace() retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto.
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)//conecttando tudo..
console.log(resultado)//sai.. [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
//resultado sai estilo string pq tem template string`template string`