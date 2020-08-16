Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1 //se valor inicial estiver setado 0, se não 1
    let acumulador = valorInicial || this[0]//acumulador é indice 0
    for (let i = indiceInicial; i < this.length; i++) {//indiceInicial setado, lenght i++ acumulando apartir inicial
        acumulador = callback(acumulador, this[i], i, this)//acumulador:acumular numeros = callback:chamada(acumulado,valoratual,indice,array)
    }
    return acumulador
}

const soma = (total, valor) => total + valor //cria const soma = ..total + valor
const nums = [1, 2, 3, 4, 5, 6]//1+2=3+3=6+4=10...21
console.log(nums.reduce2(soma, 21))//coloca valor inicial como 21..42