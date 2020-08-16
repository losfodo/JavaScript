for (let letra of "Cod3r") {//com for  of cod3r fica uma abaixo da outra por letra
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)//com for in: mostra array 0 1 2 uma abaixo da outra
}

for (let assunto of assuntosEcma) {
    console.log(assunto)//cada string uma em baixo da outra
}

const assuntosMap = new Map([//instancia
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)//sai igual acima chave e valor
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)//map,set,promise ..um abaixo do outro
}

for (let valor of assuntosMap.values()) {
    console.log(valor)//sai valores .. abordado: true..
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)//sai todos dados mais abreviado no output saida
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)//a b c
}