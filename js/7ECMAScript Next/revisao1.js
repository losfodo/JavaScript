// let e const
{
    var a = 2
    let b = 3
    console.log(b)//let só é definida internamente no bloco chaves{}
}
console.log(a)//var pode ser fora

// Template String
const produto = 'iPad'
console.log(`${produto} é
 caro
 !`)//quebra em mais de uma linha se quiser

// Destructuring:tira de dentro obj, array, string 
const [l, e, ...tras] = "Cod3r"//string com array de letras desistrutura com Cod3r
console.log(l, e, tras)//sai l é c - e é o-...tras é d3r..      C o [ 'd', '3', 'r' ]

const [x, , y] = [1, 2, 3]
console.log(x, y)//sai..1 3

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)//sai.. 9 Ana