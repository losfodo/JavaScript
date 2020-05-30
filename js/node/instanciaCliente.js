const contadorA = require('./instanciaUnica')//conecta com instancia unica arquivo.js
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()//retorna função e objeto()
const contadorD = require('./instanciaNova')()

contadorA.inc()//incrementando +1 
contadorA.inc()//incrementando +1 de ambos Contandor A e B
console.log(contadorA.valor, contadorB.valor)//ocorre mudanças pq require foi apenas exportado então faz cache do que retorna A para B..sai: 3 3

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)//C:3 e D:1nao tem alteração pois são novas instancias criadas apartir de uma factory