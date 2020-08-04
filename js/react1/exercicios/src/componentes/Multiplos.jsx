import React from 'react'

const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>//retorna boa tarde + props nome no index.js colocado

const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

export { BoaTarde, BoaNoite }//export:componente sendo esportado
export default { BoaTarde, BoaNoite }//default: coloca uma função anonima retorna padrão quando importado