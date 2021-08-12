"use strict";

const navi = document.querySelector(".filter");
const itemList = document.querySelector(".items");
const allItem = Array.from(document.querySelectorAll(".item"));
const headerLogo = document.querySelector(".header__logo");

headerLogo.addEventListener("click", () => {
  createAll();
});

navi.addEventListener("click", (evnet) => {
  const tag = event.target.tagName;
  const targetName = event.target.classList.value;
  if (tag == "IMG") {
    const items = allItem.filter((item) => item.dataset.type == targetName);
    deleteAll();
    items.forEach((item) => {
      item.classList.add("visible");
    });
  } else if (tag == "BUTTON") {
    const items = allItem.filter((item) => item.dataset.color == targetName);
    deleteAll();
    items.forEach((item) => {
      item.classList.add("visible");
    });
  }
});

function deleteAll() {
  allItem.forEach((item) => {
    item.classList.remove("visible");
  });
}

function createAll() {
  allItem.forEach((item) => {
    item.classList.add("visible");
  });
}
