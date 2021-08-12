"use strtict";

loadItems() //
  .then((items) => {
    displayItems(items);
  })
  .catch(console.log);

function loadItems() {
  return fetch("./data/data.json").then((response) => console.log(response));
}
