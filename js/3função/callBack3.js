// Exemplo de callback no browser,, codar isto no browser em si
document.getElementsByTagName('body')[0].onclick = function (e) {//passa varios elementos,,acessa primeiro indice body,,onclick:ao clicar recebe função parametro evento
    console.log('O evento ocorreu!')//saida..
}//resumindo ao clicar no browser ocorre a saida do console no console.