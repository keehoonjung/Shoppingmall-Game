"use strtict";

function loadItems() {
  return fetch("./data/data.json") //
    .then((response) => response.json())
    .then((json) => json.items);
}

loadItems() //
  .then((items) => {
    displayItems(items);
  })
  .catch(console.log);
