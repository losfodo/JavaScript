function tratarErroELancar(erro) {//função que recebe o erro
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }//passa a menssagem de erro com throw.. tipo de erro, menssagem, data de compilação
}

function imprimirNomeGritado(obj) {
    try {//try significa tentar
        console.log(obj.name.toUpperCase() + '!!!')//toUpperCase:converte p maiusculo
    } catch (e) {//na tentaviva o erro cai no catch
        tratarErroELancar(e)//parametro da função de erro
    } finally {
        console.log('final')//finally:executa de qualquer forma se o que colocou no console...
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)//imprime roberto com letra maiuscula ROBERTO,,, mas da erro