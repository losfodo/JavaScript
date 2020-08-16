function Aula(nome, videoID) {//função
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)//instancia new..
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)//saida

// simulando o new
function novo(f, ...params) {
    const obj = {}//cria um objeto vazio
    obj.__proto__ = f.prototype//obj proto aponte p f prototype
    f.apply(obj, params)//apply():aceita um array de argumentos ou chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).
    return obj//retornando obj vazio
}

const aula3 = novo(Aula, 'Bem Vindo', 123)//saida igual a anterior
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)