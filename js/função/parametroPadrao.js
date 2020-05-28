// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 //a recebe a ou o valor 1
    b = b || 1
    c = c || 1
    return a + b + c 
}
//soma1() 3 valor sao indefinidos sendo 1 somando da 3,,soma1(3)=passa a para 3 colocou valor b e c ficam um somando=5
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))//retornando 0 ele retorna valor 3..

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //se a for estritamente diferente de undefined retorna a se nao valor 1
    b = 1 in arguments ? b : 1//dentro de arguments existe valor um se existir pega b se não valor 1
    c = isNaN(c) ? 1 : c //isnotanumber retorne ao padrão ou se for numero retorna valor c//mais adequada
    return a + b + c //retorno numeros..
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))//soma de 0 ai de fato da 0

// valor padrão do es2015 //mais ideal a ser usado e resumido
function soma3(a = 1, b = 1, c = 1) {//a a e c valor padrão 1
    return a + b + c //retorna
}
//soma3() valor padroniza 1+1+1
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))//com 0 fica 0 msm