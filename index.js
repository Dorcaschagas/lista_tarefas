document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const btn = document.getElementById('button')

        btn.click()
    }

})

function adicionar (){

    let text = document.getElementById('texto').value;

    let list = document.getElementById('lista').innerHTML;
    
    let ordem = []

    if( text == null || text == '') {
        return
    }

    list += "<li class='li'><input class='check' type='checkbox' id='myCheckbox'><label for='myCheckbox'>" + text + "</label></li>";

    ordem.push(text)

    for(let i=0; i < ordem.length; i++){
        console.log(i + ':' + ordem[i])
    }
   
    document.getElementById('lista').innerHTML = list;

    document.getElementById('texto').value = null;
    console.log(ordem)
}