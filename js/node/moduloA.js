console.log(this)

this.ola = 'Fala Pessoal'//este this pode ser acessado em outro arquivo
exports.bemVindo = 'Bem vindo ao node!'//tbm acessavel outro arquivo apontando pr objeto
module.exports.ateLogo = 'Até próximo exemplo'//outra forma

/*exportaçoes de 3 formas diferentes,, não tem saida pois tem q dar o require */