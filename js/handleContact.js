//preenche a mensagem a ser enviada por e-mail com o texto enviado no arg
function preencherMensagem(texto){
    document.getElementById("message").value=texto;
}

//determina quais opções da tabela foram selecionadas, e retorna as opções como string
function determinarSelecao(){

    //prepara uma variável contendo as linhas da tabela
    var lista = document.getElementById("tabelaDeValores").rows;
    var itensSelecionados = "";
    //itera, buscando apenas as linhas selecionadas
    for (var i=0; i < lista.length; i++){
        if (document.getElementById("tabelaDeValores").rows[i].classList.contains("selected")){
            console.log(lista[i].cells[1].innerHTML);
            //adiciona os itens selecionados numa string, um por linha
            itensSelecionados += lista[i].cells[1].innerHTML += "\n"
        }
    }

    //realiza a tratativa da mensagem final, caso o usuário tenha selecionado algum item na lista.
    if (itensSelecionados.length > 0){
        var stringFinal = "Olá,\nEstou solicitando um orçamento para os seguintes ambientes:\n\n" + itensSelecionados + "\nMais Informações: ";
    } else {
        var stringFinal = "";
    }

    return stringFinal;
}