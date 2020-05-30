// console.log(global)
global.MinhaApp = Object.freeze({//colocado no global qualquer arquivo da minha ap tera acesso a ela,,object.freeze:obj congelado nao pode ser mudado
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})