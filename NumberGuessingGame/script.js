const rand = Math.round(Math.random() * 10);
const output = document.querySelector(".output");
const btn = document.querySelector(".guess-btn");

guessButtonHandler = () => {
  const guess = document.querySelector("input");
  if (rand == Number(guess.value)) {
    output.innerHTML = "You are correct";
    output.style.color = "green";
  } else {
    output.innerHTML = "Try again";
    output.style.color = "red";
    guess.value = "";
  }
};

btn.addEventListener("click", guessButtonHandler);
