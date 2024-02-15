const number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess)
    document.querySelector(".message").textContent = "No number enterd !!";
  else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "correct guess 🤩";
    document.querySelector(".highscore").textContent = score;
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
    }
  }
});
