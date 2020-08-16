function teste1(num) {
    if(num > 7)
        console.log(num)//saira apenas se for  num acima de 7
    
    console.log('Final')//final sempre vai sair pq esta fora do parametro num acima
}

teste1(6)//sai apenas final no caso
teste1(8)//acima de 7 sai 8 e final

function teste2(num) {
    if(num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)//imprime 6 msm 7 sendo maior q 6 pq tem um ; ponto e virgula
teste2(8)//saida..