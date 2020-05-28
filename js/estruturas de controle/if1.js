function soBoaNoticia(nota) { //só executara soboanoticia
    if(nota >= 7) {//if se nota for maior ou igual a 7
        console.log('Aprovado com ' + nota)//execuva no console
    }
}

soBoaNoticia(8.1)//mostra resultado 8.1 
soBoaNoticia(6.1)// não mostra com 6.1

function seForVerdadeEuFalo(valor) {
    if(valor) {//tem q ter um valor convertido para true
        console.log('É verdade... ' + valor)//apenas valores true abaixo
    }
}

seForVerdadeEuFalo()//undefined
seForVerdadeEuFalo(null)//nulo 
seForVerdadeEuFalo(undefined)//false tbm
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')//sem valor tbm
seForVerdadeEuFalo(0)//0 é falso tbm o valor
seForVerdadeEuFalo(-1)//true
seForVerdadeEuFalo(' ')//espaço em branco true
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])//true
seForVerdadeEuFalo([1, 2])//true
seForVerdadeEuFalo({})//true