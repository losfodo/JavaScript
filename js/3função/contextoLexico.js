const valor = 'Global'

function minhaFuncao() {
    console.log(valor)//dentro das chaves da função nao tem saida de valor
}

function exec() {
    const valor = 'Local'//local não sai
    minhaFuncao()
}

exec()//sai ''global'' por aqui, contexto lexico, pois tem noção do local definido