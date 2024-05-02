var colecao = document.getElementById("colecao");

var items = JSON.parse(localStorage.getItem('items'))

for (var i = 0; i < items.length; i++) {
    var card = `
    <div class="card">
    <p class="titulo">${items[i].titulo}</p>
    <img src="./src/images/mario.png" alt="">
    </div>
    `
    
    colecao.innerHTML += card;
    
}
