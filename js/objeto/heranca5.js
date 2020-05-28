console.log(typeof String)
console.log(typeof Array)//all function..
console.log(typeof Object)

String.prototype.reverse = function () {//reverse =reverter uma string ou array,, adicionando novas funçoes e atributos
    return this.split('').reverse().join('')//split:pertence a string e quebra a string em cada uma das letras,,reverse:gera inversão,,join:juntar novamente elementos na string
}

console.log('Escola Cod3r'.reverse())//usando reverse = reverte todo o texto da string.. r3doC alocsE

Array.prototype.first = function() {//first de primeiro
    return this[0]//pegando primeiro elemento do array[0]
}

console.log([1, 2, 3, 4, 5].first())//first retornara apenas o primeiro 1
console.log(['a', 'b', 'c'].first())//a

String.prototype.toString = function () {//com toString vc esta sobreescrevendo neste momento
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())//odut uocsaL,, retorno o lascou tudo