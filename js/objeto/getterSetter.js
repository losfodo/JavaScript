const sequencia = {
    _valor: 1, // convenção=o underline antes variavel q avisa que a variavel sera usada dentro da sequencia
    get valor() { return this._valor++ },//get função vai retornar o this ++
    set valor(valor) { //passa o atributo com set= vantagem aplicando if  no set
        if(valor > this._valor) {//se o valor for maior q atual..
            this._valor = valor//vai permitir test
        }
    }
}

console.log(sequencia.valor, sequencia.valor)//saida get..
sequencia.valor = 1000 //valor vira 1000
console.log(sequencia.valor, sequencia.valor)//saida de 1000 com ++ 1001
sequencia.valor = 900//tentando trazer sequencia menor q ja tem o 1000 ele ignora
console.log(sequencia.valor, sequencia.valor)//ai a saida fica 1002 e 1003 continuando sua sequencia


/*setter: pode ser usado para executar uma função sempre que se tenta mudar uma propriedade específica. 

set:liga a propriedade da função para ser chamada quando existe uma tentativa de definir valor para essa propriedade.*/

/*getter: Às vezes é desejável que se permita acesso a uma propriedade que retorna um valor computado dinamicamente,
 ou você pode querer refletir o status de uma variável interna sem requerer o uso de chamadas de método explícitas.
 
 get:associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.*/