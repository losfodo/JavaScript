{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)//variavel tem saida pq ta dentro do parenteses ou bloco
            }
        }
    }
}

console.log(sera)//aqui tbm é visivel msm fora pq é js e nao tem função ela fica global

function teste() {
    var local = 123//variavel dentro de um escopo function, ela só é visivel dentro da function
    console.log(local)
}

//teste() //fora da function daria erro
//console.log(local) //local nao é definido fora

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}//fuja do escopo global fora do escopo
console.log('fora =', numero)//ambos tem saida no console por ser apenas variavel e nao function