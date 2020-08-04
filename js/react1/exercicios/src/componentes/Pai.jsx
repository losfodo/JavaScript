import React from 'react'
//import Filho from './Filho' //importa filho em pai
import { childrenWithProps } from '../utils/utils'  //import na pasta utils arquivo utils

/*export function childrenWithProps(props) {//pode ser usado em qualquer componente pegando param pai com clone para filho
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { 
            ...props, ...child.props
        })
    })
}*///se quiser usar uma função para isso

export default props => //componente funcional,,h1 do pai,,h2 filhos,,ul ...(props) nome e sobrenome filho
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>{/*passar o nome e sobrenome de h1 maior no site */}
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>