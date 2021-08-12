"use strtict";

function loadItems() {
  return fetch("./data/data.json").then((response) => console.log(response));
}

loadItems() //
  .then((items) => {
    displayItems(items);
  })
  .catch(console.log);
