import React from 'react' //deve ser importado para funcionar

export default props => [//props para nome
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>//para ter duas tags h1 e h2 se inclui um key e array[] ou div dentro dos dois
]


//import React, { Fragment } from 'react' //deve ser importado para funcionar,,importando fragment nao é necessario colocar react nos h1 e h2
// export default props =>
//     <React.Fragment>//tbm serve como uma tag para funcionar com dois
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// export default props =>
//     <div>//exemplo com div
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>