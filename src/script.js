var form = document.getElementById("novo-item");

function handleForm(event) { 
    event.preventDefault();
    var titulo = document.getElementById("titulo");
    var descricao = document.getElementById("descricao");

    var item = {
        titulo: titulo.value,
        descricao: descricao.value
    };

    var items = localStorage.getItem("items");
    console.log(item)
    console.log(items)

    if (items == null) {
        items = []
    }
    else {
        items = JSON.parse(items)
    }

    items.push(item)
    console.log(items)

    localStorage.setItem('items', JSON.stringify(items))
} 

form.addEventListener('submit', handleForm);



