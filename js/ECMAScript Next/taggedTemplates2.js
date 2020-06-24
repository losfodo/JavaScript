function real(partes, ...valores) {//partes e valores 
    const resultado = []//dentro de um array
    valores.forEach((valor, indice) => {//forEach:receber cada um dos valores
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`//isNaN(valor):se não for um valor numerico retorna valor : mas se for numero coloca real e tofixed2 para duas casas decimais  
        resultado.push(partes[indice], valor)//add 1 uma parte depois indice ordem correta,valor
    })
    return resultado.join('')//pegar todos elementos pra gerar string
}

const preco = 29.9
const precoParcela = 11//sendo numerico sai R$11.00 apartir da template string
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)//1x de R$29.90 ou 3x de R$11.00