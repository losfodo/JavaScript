// middleware pattern (chain of responsibility),,,obj vai de 1 passo para outro
const passo1 = (ctx, next) => {//ctx:contexto objeto,next:proximo passo da cadeia
    ctx.valor1 = 'mid1'//marca q passou por este passo obj
    next()//função next para o proximo passo
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'//terceiro passo nao necessita de next dessa vez

const exec = (ctx, ...middlewares) => {//função exec para executar,,...middlewares:conjunto de middlewares
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&//se middlewares e indice for menor q tamanho do array(para nao executar um metodo q esta fora do array)
            middlewares[indice](ctx, () => execPasso(indice + 1))//e passar middlewares com indice 0-1-2,,faz função const execpasso (adicional indice+1)
    }
    execPasso(0)//executando o primeiro array 0
}

const ctx = {}//cria contexto vazio
exec(ctx, passo1, passo2, passo3)//e executa 1 2 3,,, se colocar passo 3 na frente como ele não possui next só ele executará
console.log(ctx)//saida console