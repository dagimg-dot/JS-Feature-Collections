let rand = Math.round(Math.random() * 10);
const output = document.querySelector(".output");
const btn = document.querySelector(".guess-btn");
const guess = document.querySelector("input");

let count = 0;

disableElement = (element) => {
  element.style.backgroundColor = "grey";
  element.addEventListener("click", () => {
    return;
  });
};

playAginBtnHandler = () => {
  const playAgainBtn = document.querySelector(".play-again-btn");
  playAgainBtn.addEventListener("click", () => {
    output.innerHTML = "";
    rand = Math.round(Math.random() * 10);
    btn.style.backgroundColor = "brown";
    btn.addEventListener("click", guessButtonHandler);
    console.log("rand: ", rand);
    count = 0;
    guess.value = "";
  });
};

guessButtonHandler = () => {
  if (count == 9) {
    output.innerHTML =
      '<span>😒</span><h1>You lost the game</h1><button class="play-again-btn">Play again</button>';
    output.style.color = "red";
    disableElement(btn);
    playAginBtnHandler();
  } else {
    const guess = document.querySelector("input");
    if (rand == Number(guess.value)) {
      output.innerHTML =
        '<span>😁</span><h1>You are correct</h1><button class="play-again-btn">Play again</button>';
      output.style.color = "green";
      playAginBtnHandler();
    } else {
      count++;
      output.innerHTML = "<span>😒</span><h1>Try again</h1>";
      output.style.color = "red";
      guess.value = "";
    }
  }
  guess.focus();
};

btn.addEventListener("click", guessButtonHandler);
