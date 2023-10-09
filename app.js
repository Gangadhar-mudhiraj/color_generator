let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let ran = getrandomcolor();
  h3.innerText = ran;
  let di = document.querySelector("div");
  di.style.backgroundColor = ran;
  btn.style.backgroundColor = ran;
});
function getrandomcolor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}
