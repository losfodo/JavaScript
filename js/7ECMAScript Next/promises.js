function falarDepoisDe(segundos, frase) {//função 2 parametros
    return new Promise((resolve, reject) => {//retorna uma promise,(parametro resolve:executar,reject:rejeitar),recebe função anonima tipo arrow
        setTimeout(() => {//tempo de resposta processamento
            resolve(frase)//apenas 1 unico parametro é aceito
        }, segundos * 1000)//segundos multiplicado por 1000 para quando der o tempo chamar o resolve
    })
}

falarDepoisDe(3, 'Que legal!')//(3 segundos, frase q legal)
    .then(frase => frase.concat('?!?'))//função then:resolve(frase) > concat:combina o texto de duas ou mais strings e retorna uma nova string.
    .then(outraFrase => console.log(outraFrase))//concatena then acima e nesse then saidaa console,,then:retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa
    .catch(e => console.log(e))//mensagem de erro dura 3 segundos caso chame o reject

    /*Promise é um objeto usado para processamento assíncrono. 
    Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca. */