document
    .querySelector("form")
    .addEventListener("submit", (e) => {
        e.preventDefault();

        const form = document.querySelector("form");

        var item = {
            id: new Date().getTime(),
            titulo: form.titulo.value,
            descricao: form.descricao.value
        };

        salvar(item);
    });


function salvar(item) {
    var items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));
    window.location = "colecao.html"
}

