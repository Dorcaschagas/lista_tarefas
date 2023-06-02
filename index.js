let ordem = []

let botao = document.getElementById('organizar')
botao.innerHTML = "⁝"

function organizar(){
    ordem.sort()
    let elementos = ''

    for(let i=0; i<ordem.length; i++){
        elementos += "<li class='li'><input class='check' type='checkbox' id='myCheckbox'><label for='myCheckbox'>" + ordem[i] + "</label></li>"

        document.getElementById('lista').innerHTML = elementos
        console.log(ordem[i])
    }
    // document.getElementById('lista').innerHTML = elementos
    
}

function adicionar (){
    botao.innerHTML = "organizar texto"

    let text = document.getElementById('texto').value;

    let list = document.getElementById('lista').innerHTML;

    if( text == null || text == '') {
        return
    }
    
    list += "<li class='li'><input class='check' type='checkbox' id='myCheckbox'><label for='myCheckbox'>" + text + "</label></li>";
    
    ordem.push(text)

    for(let i=0; i < ordem.length; i++){
        // console.log(i + ':' + ordem[i])
    }
   
    document.getElementById('lista').innerHTML = list;

    document.getElementById('texto').value = null;
}

document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const btn = document.getElementById('button')
        e.preventDefault()
        btn.click()
    }

})

botao.addEventListener('click', onmouseover)
