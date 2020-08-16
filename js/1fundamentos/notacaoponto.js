console.log(Math.ceil(6.1))//math é obj para calculo matematicos.ceil=arredonda para cima numeros quebrados= 7

const obj1 = {}//cria constante
obj1.nome = 'Bola'//objeto.nome do atributo = atributo,, notaçãoponto mais pratico
// obj1['nome'] = 'Bola2' // tbm é possivel.. acessa atributo usando string
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome//this.nome=recebe o atributo nomeparametro e fica visivel publico
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')//novo objeto cadeira
const obj3 = new Obj('Mesa')
console.log(obj2.nome)//imprimir console obj2...
console.log(obj3.nome)
obj3.exec()//como ja tem console a cima abrevia assim imprimir console exec