function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`//return calculo preço dos produtos
}

const produto = {//produtos..
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1//globais.. parametros globais
console.log(getPreco())//saida so saira o preço se tiver global acima
console.log(produto.getPreco())//produto em si.notebook preço do produto com desconto 

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))//chamar a função carro call
console.log(getPreco.apply(carro))//tbm chama a função com apply,, diferença é a passagem dos parametros

console.log(getPreco.call(carro, 0.17, '$'))//exemplo da passagem dos parametros entre ()
console.log(getPreco.apply(global, [0.17, '$']))//no caso do apply passa como se fosse um array[] cochetes


/* Com call , você pode escrever um método uma vez e então herdá-lo em outro objeto,
 sem ter que reescrever o método para o novo objeto */

 /*apply(this, new Array('comer', 'bananas')). Você pode também usar arguments para o parâmetro argsArray. */