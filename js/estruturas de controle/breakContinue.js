const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {// x é indice do array
    if (x == 5) {// se indice ==5 encontra break=parada
        break//desvia fluxo proximo a ele for
    }
    console.log(`${x} = ${nums[x]}`)//saida do array
}

for (y in nums) {
    if (y == 5) {
        continue//o continue vai continuar a execução até n ter mais parametros do array
    }
    console.log(`${y} = ${nums[y]}`)
}

externo://rotulo: chamou for de externo
for (a in nums) {
    for (b in nums) {//for dentro de for
        if(a == 2 && b == 3) break externo//break externo p/ chamar for de externo
        console.log(`Par = ${a},${b}`)//execução diferente um de cada até a chegar a=2 b=3 e parar
    }
}

console.log('Fim!')//executa uma vez no final