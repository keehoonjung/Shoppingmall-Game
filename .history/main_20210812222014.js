"use strtict";

const itemList = document.querySelector(".items");
const buttons = document.querySelector(".buttons");
const logoBtn = document.querySelector(".logo");

function loadItems() {
  return fetch("./data/data.json") //
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  items.forEach((item) => {
    const list = document.createElement("li");
    list.setAttribute("class", "item");
    list.setAttribute("data-color", item.color);
    list.setAttribute("data-type", item.type);
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
  const allItem = document.querySelectorAll(".item");
  logoBtn.addEventListener("click", () => {
    allItem.forEach((item) => {
      item.classList.remove("hidden");
    });
  });
  buttons.addEventListener("click", (event) => {
    const key = event.target.dataset.key;
    const value = event.target.dataset.value;
    allItem.forEach((item)=>{
        if(key == "type"){

        }
    })
    } else if (colorName) {
      const result = items.filter((item) => item.color == colorName);
      itemList.innerHTML = "";
      displayItems(result);
    }
  });
}
