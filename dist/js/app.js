"use strict";
var listaItens = [];
const exibirLista = document.querySelector(".title");
function addItemToList() {
    const item = document.querySelector("#itemForm");
    listaItens[listaItens.length] = item.value;
    item.value = "";
    update();
}
;
function update() {
    const cont = document.querySelector(".lista");
    cont.innerHTML = "";
    for (var i in listaItens) {
        cont.innerHTML += `
    <div class="container">
    <article class="item">
        <p class="title">
        <div class="itemContainer">${listaItens[i]}</div>
        <div class="buttonContainer" onclick="remove(${i})">
            <button class="deleteButton"><img src="https://icongr.am/clarity/remove.svg?size=18&color=currentColor" alt=""></button>
        </div>
    </p>
    </article>
  </div>
  `;
    }
}
;
function remove(id) {
    listaItens.splice(id, 1);
    update();
}
;
function clearItems() {
    listaItens = [];
    update();
}
;
