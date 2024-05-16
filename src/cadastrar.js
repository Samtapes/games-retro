document
    .querySelector("form")
    .addEventListener("submit", (e) => {
        e.preventDefault();

        const form = document.querySelector("form");

        if (form.titulo.value === "" && form.descricao.value === "" && form.preco.value === ""){
            alert("Não foi possível cadastrar o novo item, pois o formulário está nulo!")
            return;
        }

        var item = {
            id: new Date().getTime(),
            titulo: form.titulo.value,
            descricao: form.descricao.value,
            preco: form.preco.value
        };

        salvar(item);
    });


function salvar(item) {
    var items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));
    window.location = "colecao.html"
}

