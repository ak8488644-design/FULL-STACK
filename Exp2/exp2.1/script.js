let textInput = document.getElementById("textInput");
let counter = document.getElementById("counter");
let maxChars = 150;

textInput.addEventListener("input", function () {
  let length = textInput.value.length;
  counter.innerText = length + " / " + maxChars + " characters";

  if (length >= maxChars) {
    counter.classList.add("limit");
  } else {
    counter.classList.remove("limit");
  }
});
