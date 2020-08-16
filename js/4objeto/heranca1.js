const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)//undefined pq nao tem prototipe apenas __proto__
console.log(ferrari.__proto__)//__proto__=p/ acessar quem é o prototipo do obj ou super objt pai : {}da vazio mas existe
console.log(ferrari.__proto__ === Object.prototype)//true é ===
console.log(volvo.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__ === null)//true

function MeuObjeto() {}//function definida
console.log(typeof Object, typeof MeuObjeto)//function
console.log(Object.prototype, MeuObjeto.prototype)//{}vazio, meuobjeto definida agr..