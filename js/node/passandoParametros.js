module.exports = function(...nomes) {//...nomes: argumento variavel ou pode passar quantos nomes quiser
    return nomes.map(nome => `Boa semana ${nome}!`)//para cada nome retorna boa semana + nome
}