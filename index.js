
function adicionar (){

    let text = document.getElementById('texto').value;

    let list = document.getElementById('lista').innerHTML;

    if( text == null || text == '') {
        return
    }

    list += "<li class='li'><input class='check' type='checkbox' id='myCheckbox'><label for='myCheckbox'>" + text + "</label></li>";
   
    document.getElementById('lista').innerHTML = list;

    document.getElementById('texto').value = null;
}