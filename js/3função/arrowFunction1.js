let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {//resumindo
    return 2 * a 
}

dobro = a => 2 * a // return implícito: de uma unica linha // mais resumido ainda
console.log(dobro(Math.PI))//math.pi: o dobro do pi.. saida

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'//função sem parametros
ola = _ => 'Olá' // _ possui um parametro
console.log(ola())