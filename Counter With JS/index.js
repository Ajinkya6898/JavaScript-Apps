document.getElementById("inc").addEventListener("click", incClick);

document.getElementById("text").textContent = 0;
var count = 0;
function incClick() {
  count++;
  document.getElementById("text").textContent = count;
}

document.getElementById("dec").addEventListener("click", decClick);

function decClick() {
  if (count <= 0) {
    document.getElementById("dec").removeEventListener(decClick);
  }
  count--;
  document.getElementById("text").textContent = count;
}
