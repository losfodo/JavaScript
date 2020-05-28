// IIFE -> Immediately Invoked Function Expression

(function() {//função dentro do escopo ,, dentro do escopo ou função é mais seguro que global pois global pode atingir o programa por ser geral e causar bugs
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()//()da a saida do console...

console.log('global aqui')