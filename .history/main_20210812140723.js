"use strict";

const navi = document.querySelector(".filter");
const itemList = document.querySelector(".items");

navi.addEventListener("click", (evnet) => {
  console.log(event.target.classList.value);
});

const pants = document.querySelectorAll(`li[data-type="pants"]`);

console.log(pants);
