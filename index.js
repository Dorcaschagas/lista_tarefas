
function adicionar (){
    // A função "adicionar" é definida.

    let text = document.getElementById('texto').value;
    // Obtém o valor do elemento com o ID "texto" e o armazena na variável "text".

    let list = document.getElementById('lista').innerHTML;
    // Obtém o conteúdo HTML do elemento com o ID "lista" e o armazena na variável "list".

    if( text == null || text == '') {
        // alert('Por favor, escreva algo antes de adicionar á lista')
        return
    }

    list += "<li class='li'><input class='check' type='checkbox' id='myCheckbox'><label for='myCheckbox'>" + text + "</label></li>";
    // Adiciona uma nova tag de item de lista "<li>" ao conteúdo da variável "list", concatenando o valor de "text" entre as tags.

    
    document.getElementById('lista').innerHTML = list;
    // Atualiza o conteúdo HTML do elemento com o ID "lista" com o valor da variável "list" atualizado, agora contendo o novo item de lista.

    document.getElementById('texto').value = null;
    // Define o valor do elemento com o ID "texto" como nulo, limpando o campo de entrada de texto.

}
