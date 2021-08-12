"use strict";

const navi = document.querySelector(".filter");
const itemList = document.querySelector(".items");

navi.addEventListener("click", (evnet) => {
  console.log(event.target);
});

itemList.addEventListener("click", (evnet) => {
  console.log(event.target);
});
