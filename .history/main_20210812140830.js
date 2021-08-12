"use strict";

const navi = document.querySelector(".filter");
const itemList = document.querySelector(".items");

navi.addEventListener("click", (evnet) => {
  const target = event.target.classList.value;
  const items = document.querySelectorAll(`li[data-type=${target}]`);
});

const pants = document.querySelectorAll(`li[data-type="pants"]`);

console.log(pants);
