let numero = 1//daria msm resultado se fosse var
{
    let numero = 2
    console.log('dentro =', numero)//preferencia de saida é de dentro do escopo
}
console.log('fora =', numero)//depois fora


var numero2 = 1//daria msm resultado se fosse let,, mais proximo
{
    let numero22 = 2
    console.log('dentropt2 =', numero2)//preferencia de saida se não possui vai o mais proximo no lugar
}
console.log('forapt2 =', numero2)//depois fora