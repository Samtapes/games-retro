
const items = JSON.parse(localStorage.getItem('items')) || null

if (items != null) {
    items.forEach( item => card(item));
}

function minus(itemId) {
    var updtItems = items.filter((item, i) => {
        document.getElementsByClassName("card")[i].children[2].textContent = "Preco $" + (item.preco-0.1).toFixed(2);
        if (item.id === itemId) {
            item.preco-=0.1;
            return item;
        }
    });

    localStorage.setItem("items", JSON.stringify(updtItems));
}

function plus(itemId) {
    var updtItems = items.filter((item, i) => {
        document.getElementsByClassName("card")[i].children[2].textContent = "Preco $" + (item.preco+0.1).toFixed(2);
        if (item.id === itemId) {
            item.preco+=0.1;
            return item;
        }
    });

    localStorage.setItem("items", JSON.stringify(updtItems));
}

function apaga(itemId) {
    var confirmation = confirm("Tem certeza?");

    if (!confirmation){
        return;
    }

    var updtItems = items.filter((item, i) => {
        document.getElementsByClassName("card")[i].remove();
        if (item.id === itemId) {
            return null;
        }
    });

    localStorage.setItem("items", JSON.stringify(updtItems));
}

function card(item) {
    var content = `
    <div class="card">
        <p class="titulo">${item.titulo}</p>
        <img src="./src/images/estrela.png" alt="">
        <p>Preço $${parseFloat(item.preco).toFixed(2)}</p>
        <div>
            <button class="minus" onClick="minus(${item.id})">-</button>
            <button class="delete" onClick="apaga(${item.id})">Apagar</button>
            <button class="plus" onClick="plus(${item.id})">+</button>
        </div>
    </div>
    `

    const card = document.createElement("div");
    card.innerHTML = content

    document.getElementById("colecao").appendChild(card);
}