require('./global')//faz require: para retorna global

console.log(MinhaApp.saudacao())//saida do global.. Estou em todos os lugares!

MinhaApp.nome = 'Eita!'//mudar para eita
console.log(MinhaApp.nome)//ao inves de sair eita sai Sistema Legal pq foi usado o freeze e nao pode ser mudado