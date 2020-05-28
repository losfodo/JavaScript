console.log('01)', '1' == 1)//==igualidade no caso true  //= atribuição
console.log('02)', '1' === 1)//=== estritamente igual, tem q ser realmente igual no caso false
console.log('03)', '3' != 3)//!= diferente
console.log('04)', '3' !== 3)// !== estritamente diferente

console.log('05)', 3 < 2) // < menor que..
console.log('06)', 3 > 2) // > maior que..
console.log('07)', 3 <= 2)// <= menor ou igual
console.log('08)', 3 >= 2)// maior ou igual

const d1 = new Date(0) //cria 2 date..
const d2 = new Date(0)
console.log('09)', d1 === d2)// === compara a referencia de memoria e diz falso
console.log('10)', d1 == d2) // == falso
console.log('11)', d1.getTime() === d2.getTime())// da true agr pq getTime tem msm tipo e msm valor

console.log('12)', undefined == null) //true iguais
console.log('13)', undefined === null) //mas false nao estritamente é igual


console.log('--------------operadores lógicos----------------')

/*   verdadeiro e falso
 v e'&&' v -> v                  v ou'||' ? -> v                 !v -> f //oposto se for true é false
 v e f -> f                      f ou v -> v                     !f -> v
 f e ? -> f                      f ou f -> f

 v xou v -> f
 v xou'^' f -> v //da verdadeiro se for diferente do outro
 f xou'!=' v -> v
 f xou f -> f
*/
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //const compra sorvete =teria q trab1 ou trab2
    const comprarTv50 = trabalho1 && trabalho2 // tem q ser os dois trab1 e trab2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor //ou esclusivo uma forma de fazer
    const comprarTv32 = trabalho1 != trabalho2 //ou esclusivo,, trab 1 for diferente de trab2 da true
    const manterSaudavel = !comprarSorvete // operador unário //negação logica,, oposto se for true é false

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //
}

console.log(compras(true, true))//true e true em todos os casos acima o que ocorre
console.log(compras(true, false))//true false nesse tbm
console.log(compras(false, true))//...
console.log(compras(false, false))
