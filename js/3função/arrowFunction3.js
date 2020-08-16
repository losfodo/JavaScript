let comparaComThis = function (param) {
    console.log(this === param)//this estritamente igual param
}

comparaComThis(global)//true=global estritamente igual a this

const obj = {}//cria obj
comparaComThis = comparaComThis.bind(obj)//compara com this com bind
comparaComThis(global)//não é mais global false
comparaComThis(obj)//por conta do bind vira obj

let comparaComThisArrow = param => console.log(this === param) //
comparaComThisArrow(global)//nao é global tbm
comparaComThisArrow(module.exports) //true,, Exports. O sistema de módulos do Node. js é responsável por criar o objeto module

comparaComThisArrow = comparaComThisArrow.bind(obj)//arrow function é mais forte q bind
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)//true

/*
Podemos dividir as variáveis quanto ao escopo em três tipos:
variáveis locais, parâmetros formais e variáveis globais.

*Variáveis locais
São aquelas declaradas dentro do bloco de uma função.
Não podem ser usadas ou modificadas por outras funções.
Somente existem enquanto a função onde foi declarada estiver sendo executada.

*Parâmetros formais
Os parâmetros formais de uma função também são variáveis locais da função.

*Variáveis Globais
São declaradas fora de todos os blocos de funções.
São acessíveis em qualquer parte do programa, ou seja, podem ser usadas e modificadas por todas as- outras funções.
Existem durante toda a execução do programa.
*/