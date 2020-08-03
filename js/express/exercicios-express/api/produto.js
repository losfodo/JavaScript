module.exports = (app, texto) => {//exporta função app e texto..
    function salvar(req, res) {//mesmo q em usuario.js salvar e obter só q sendo feito direto no arquivo proprio..
        res.send('Produto > salvar > ' + texto)
    }

    function obter(req, res) {
        res.send('Produto > obter > ' + texto)
    }

    app.post('/produto', salvar)//post para salvar
    app.get('/produto', obter)//get para obter

    return { salvar, obter }//caso quiser retornar esta duas funçoes para ser usado em outro contexto..
}
//© 2020 GitHub, Inc.