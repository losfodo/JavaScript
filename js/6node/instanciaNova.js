// Uma factory retorna um novo objeto
module.exports = () => {//retorna função
    return {//retorna objt
        valor: 1,
        inc() {
            this.valor++
        }
    }
}