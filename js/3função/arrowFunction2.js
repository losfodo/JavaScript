function Pessoa() {
    this.idade = 0

    setInterval(() => {//cria uma arrow function
        this.idade++//somando idade
        console.log(this.idade)
    }, 1000)//contagem
}

new Pessoa