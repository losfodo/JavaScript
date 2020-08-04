import React, { Component } from 'react' /*importa o react em si */
import ReactDOM from 'react-dom'/*importar reactdom */

//import Primeiro from './componentes/Primeiro' //primeiro arquivo tem que ter letra maiuscula sempre
//import BomDia from './componentes/BomDia'

//const elemento = <h1>React 2</h1>//parece html mas é js

//ReactDOM.render(<BomDia nome="Rafa"/>, document.getElementById('root')) /*chamar a função reactdom para renderizar o Bomdia elemento da pagina, dentro index.html a id root chama,, aparece react chamado nas chaves fechadas*/

//$('<h1>').html('React2')//isto jquery e algo semelhante a isto é criado no momento q a o transpalhe ou conversão do js puro

import Pai from './componentes/Pai' //import do componentes pasta do jsx
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>    
, document.getElementById('root'))


/*import {BoaTarde, BoaNoite} from './componentes/Multiplos'
ReactDOM.render(
    <div>
    <BoaTarde nome="Ana"/>
    <BoaNoite nome="Bia"/>
    </div>    
    , document.getElementById('root'))*/

    /*import Saudacao from './componentes/Saudacao'
    ReactDOM.render(//instanciando abaixo o componente,,saudacao estado aqui fixo
        <div>
        <Saudacao tipo="Bom dia" nome="João"/>
        </div>    
        , document.getElementById('root'))*/



