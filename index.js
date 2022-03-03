const increase = document.getElementById("increase-btn");
const zero = document.getElementById("zero-btn");
const decrease = document.getElementById("decrease-btn");
const countHeading = document.getElementById("count");
let count = 0;

countHeading.innerText = count;

increase.addEventListener("click", () => {
  count += 1;
  countHeading.innerText = count;
  bodyColor(count);
});

decrease.addEventListener("click", () => {
  count -= 1;
  countHeading.innerText = count;
  bodyColor(count);
});

zero.addEventListener("click", () => {
  count = 0;
  countHeading.innerText = count;
  bodyColor(count);
});

function bodyColor(count) {
  if (count === 0) {
    countHeading.style.color = "black";
  }
  if (count > 0) {
    countHeading.style.color = "green";
  }
  if (count < 0) {
    countHeading.style.color = "red";
  }
}
