// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 significa local foi colocado uma palavra

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao// retorna saudação lexico2 fala prioridade dentro chaves
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {//objeto
    nome: 'Pedro',//parametros nome idade...
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)//gera opa primeiro
console.log(exec())//function retornar falaa
console.log(cliente)//dados cliente parametros