
const items = JSON.parse(localStorage.getItem('items')) || null

if (items != null) {
    items.forEach( item => card(item));
}

function card(item) {
    console.log(item)
    var content = `
    <div class="card">
        <p class="titulo">${item.titulo}</p>
        <img src="./src/images/mario.png" alt="">
    </div>
    `

    const card = document.createElement("div");
    card.innerHTML = content

    document.getElementById("colecao").appendChild(card);
}