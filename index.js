let ordem = []
document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const btn = document.getElementById('button')
        btn.click()
    }
})
function mudarTexto(novoTexto){
    
    botao.innerHTML = novoTexto
}

function adicionar (){

    let text = document.getElementById('texto').value;

    let list = document.getElementById('lista').innerHTML;

    if( text == null || text == '') {
        return
    }
    
    list += "<li class='li'><input onclick='myCheckbox()' class='check' type='checkbox' id='myCheckbox'><label for='myCheckbox'>" + text + "</label></li>";
    
    ordem.push(text)
    
    document.getElementById('lista').innerHTML = list;
    
    document.getElementById('texto').value = null;
}



let botao = document.getElementById('organizar')
localStorage.setItem('ordem', JSON.stringify(ordem));

let ordemArmazenada = localStorage.getItem('ordem');
if (ordemArmazenada) {
  ordem = JSON.parse(ordemArmazenada);
}

function organizar(){
    ordem.sort()
    let elementos = ''
    
    for(let i=0; i<ordem.length; i++){
        elementos += "<li class='li'><input onclick='myCheckbox()' class='check' type='checkbox' id='myCheckbox'><label for='myCheckbox'>" + ordem[i] + "</label></li>"
        
        if(checked){
            elementos = "checked"
        }
    }
    document.getElementById('lista').innerHTML = elementos
        console.log(ordem[i])
    
}

// let checkbox = document.getElementById('myCheckbox');
function myCheckbox(){
    let checkbox = document.getElementById('myCheckbox'); 
}
