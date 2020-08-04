import React, { Component } from 'react' //herda component do react,

export default class Saudacao extends Component {//esporta classe saudação estende component

    state = {//estado situação
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props) {
        super(props)//deve passar o super e as propriedades para funcionar digitação em tempo real no site
        
        this.setTipo = this.setTipo.bind(this)//bind:precisa dar bind apenas nos métodos que você passa para outros componentes.
    }

    setTipo(e) {//para mudar no site em si digitar algo e talz,,e tipo usando bind para resolver
        this.setState({ tipo: e.target.value })//mostrar o valor do input,,responsavel por alterar o estado no site o tipo recebendo target value
    }

    setNome(e) {//settipo e nome apontam para o conponente atual funcionando a digitação no site,,setnome com função arrow
        this.setState({ nome: e.target.value })
    }

    render() {//função render
        const { tipo, nome } = this.state//{parametros}pega pelo this.state:estado
        return (//retornar abaixo expressão
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}/*value e onchange {passa a função para ser chamada(e)chamando arrowfunction:},,onchange mudar no site em si*/
