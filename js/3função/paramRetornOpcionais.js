function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {//se acima de 20
        console.log(`Valor acima do permitido: ${area}m2.`)//aacima de 20 executa..
    } else {
        return area//else:retorna area valor const area = largura*altura
    }
}

console.log(area(2, 2))//retornou area
console.log(area(2))//nan
console.log(area())//nan
console.log(area(2, 3, 17, 22, 44))//2*3=6 os outros parametros estão indefinidos n acontece nada
console.log(area(5, 5))//executa if pois acima de 20,,e retorna undefined pois numero junto com string??