const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }//const obj com função soma e return atributos
console.log(JSON.stringify(obj))//json: sai atributos forma textual {"a":1,"b":2,"c":3} e função é excluida dp json pois é usada para dados e nao executado

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) /*nao valido da erro */
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))/*erro */
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))/*sai corretamente pois deve ter aspas duplas em json */
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))//modificando com parse o json

/*JSON, um acrônimo de JavaScript Object Notation, é um formato compacto, de padrão aberto independente,
 de troca de dados simples e rápida que utiliza texto legível a humanos, no formato atributo-valor. */