const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");

const counterValue = document.getElementById("value");
let value = 0;


increment.addEventListener("click", incrementClick);

function incrementClick(evt) {
  value += 1;
  counterValue.textContent = value;
};

decrement.addEventListener("click", decrementClick);

function decrementClick(evt) {
  value -= 1;
  counterValue.textContent = value;
};