const anonimo = process.argv.indexOf('-a') !== -1//process que esta procurando q é -a,!==tem que ser diferente de -1
// console.log(anonimo),,indexOf() do objeto String pode ser utilizado para recuperar a posição inicial de um elemento

if(anonimo) {//se for anonimo
    process.stdout.write('Fala Anônimo!\n')//sai no termina fala anonimo,,/n quebra de linha para ir abaixo do terminal
    process.exit()//finaliza a execução
} else {//se não 
    process.stdout.write('Informe o seu nome: ')//sai informe seu nome
    process.stdin.on('data', data => {//process.stdin.on:processo entrada padrão(data dados apartir teclado)
        const nome = data.toString().replace('\n', '')//salva o que foi digitado data em retorno a uma string representando o objeto especificado.
// replace() retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto
        process.stdout.write(`Fala ${nome}!!\n`)//saida.. fala leonardo
        process.exit()//fim do prog
    })
}//-------------interação com terminal com entrada e saida-----------------