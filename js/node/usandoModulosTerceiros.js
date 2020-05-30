const _ = require('lodash')// const _ anderline para referenciar lodash,, carrega arquivo index.js da pasta node_modules \lodash
setInterval(() => console.log(_.random(50, 60)), 2000)//setinterval: para executar de tempor em tempos com random para executar entre 50 a 60 a 2 segundos2000

/*  -----no terminal------

node -v: mostra a versão do node
nom -v:gerenciador de arquivos para baixar mostra versão
npm i lodash: instalar lodash ou outro programa q quiser npm i ...
npm i -g nodemon: instalar nodemon serve para modificar o codigo ja em execução,, -g: global a todos,,digita terminal,,cd node,, nodemon nomearquivo.js:executa nesse modo,, rs: restaura codigo,,
*/

/*Lodash é uma biblioteca JavaScript que fornece funções utilitárias para tarefas comuns de programação 
usando o paradigma de programação funcional. */