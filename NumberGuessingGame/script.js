const rand = Math.round(Math.random() * 10);
const output = document.querySelector(".output");
const btn = document.querySelector(".guess-btn");

guessButtonHandler = () => {
  const guess = document.querySelector("input").value;
  if (rand == Number(guess)) {
    output.innerHTML = "You are correct";
  } else {
    output.innerHTML = "Try again";
  }
};

btn.addEventListener("click", guessButtonHandler);
