// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }//colocando const funcionarios dentro const clone
console.log(clone)//sai clone e funcionarios..{ ativo: true, nome: 'Maria', salario: 12348.99 }

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)//[ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ]