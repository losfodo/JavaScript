let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++// com ++ se acrescenta uma unidade ao contador somando numeros
}//ou seja somando 1 em 1 chagando em 11 parou prog

for(let i = 1; i <= 10; i++) {//for=para(i recebe ou começa apartir 1;i menor igual 10;i++ somando 1+1)
    console.log(`i = ${i}`)//1 até 10 
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] //array contagem for 0 até 4 no quinto parou
for(let i = 0; i < notas.length; i++) {//lenght=comprimento do array
    console.log(`nota = ${notas[i]}`)//executa todos elementos do array
}