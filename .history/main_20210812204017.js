"use strtict";

const itemList = document.querySelector(".items");
const buttons = document.querySelector(".buttons");

function loadItems() {
  return fetch("./data/data.json") //
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  items.forEach((item) => {
    const list = document.createElement("li");
    list.setAttribute("class", "item");
    list.innerHTML = `
        <img src=${item.img} alt="blueshirt" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size} size</span>
        `;
    itemList.appendChild(list);
  });
}

// main()
loadItems() //
  .then((items) => {
    displayItems(items);
    setClickevent(items);
  })
  .catch(console.log);

function setClickevent(items) {
  buttons.addEventListener("click", (event) => {
    const typeName = event.target.dataset.type;
    console.log(typeName);
    const result = items.filter((item) => item.type == typeName);
    itemList.innerHTML = "";
    displayItems(result);
  });
}
