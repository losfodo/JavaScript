console.log(soma(3, 4)) //saida função declaration.. pode antes

// function declaration
function soma(x, y) { 
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))//saida função expression só sai se estiver abaixo o console

// named function expression
const mult = function mult(x, y) { // nome no stack mult de x e y aparece pra indentificar mais facil,, nao é muito usado
    return x * y
}
console.log(mult(3, 4))//saida função expression só sai se estiver abaixo o console