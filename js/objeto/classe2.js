class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {//se tiver só esse parametro assume como padrão
        super(sobrenome)//super classe de pai q é avo
        this.profissao = profissao
    }
}

class Filho extends Pai {//filho extend pai tipo passa de um para outro como herança
    constructor() {
        super('Silva')
    }
}

const filho = new Filho//new filho criado
console.log(filho)//saida filho