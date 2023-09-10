let rand = Math.round(Math.random() * 10);
const output = document.querySelector(".output");
const btn = document.querySelector(".guess-btn");
const guess = document.querySelector("input");

let count = 0;

playAginBtnHandler = () => {
  const playAgainBtn = document.querySelector(".play-again-btn");
  playAgainBtn.addEventListener("click", () => {
    output.innerHTML = "";
    rand = Math.round(Math.random() * 10);
    guess.value = "";
  });
};

guessButtonHandler = () => {
  count++;
  if (count == 3) {
    console.log("3 click");
  } else {
    const guess = document.querySelector("input");
    if (rand == Number(guess.value)) {
      output.innerHTML =
        '<span>😁</span><h1>You are correct</h1><button class="play-again-btn">Play again</button>';
      output.style.color = "green";
      playAginBtnHandler();
    } else {
      output.innerHTML = "<span>😒</span><h1>Try again</h1>";
      output.style.color = "red";
      guess.value = "";
    }
  }
  guess.focus();
};

btn.addEventListener("click", guessButtonHandler);
