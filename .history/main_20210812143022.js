"use strict";

const navi = document.querySelector(".filter");
const itemList = document.querySelector(".items");
const allItem = Array.from(document.querySelectorAll(".item"));

navi.addEventListener("click", (evnet) => {
  const tag = event.target.tagName;
  const targetName = event.target.classList.value;
  if (tag == "IMG") {
    const items = allItem.filter((item) => item.dataset.type == targetName);
    console.log(items);
  } else if (tag == "BUTTON") {
    const items = document.querySelectorAll(`li[data-color=${targetName}]`);
    console.log(items);
  }
});

const pants = document.querySelectorAll(`li[data-type="pants"]`);

console.log(pants);