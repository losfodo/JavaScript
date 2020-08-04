import React from 'react' //usando uma pasta para isso

export function childrenWithProps(props) {//pode ser usado em qualquer componente pegando param pai com clone para filho
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { 
            ...props, ...child.props
        })
    })
}