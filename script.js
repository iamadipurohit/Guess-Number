"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "We are here to win";
// document.querySelector(".score").textContent = 10;
// document.querySelector(".number").textContent = 15;
// document.querySelector("input").value = 5;

// console.log(document.querySelector(".guess").value);

let secretNumber = Math.floor(Math.random() * 20) + 1;
let maximum = 0;
let score = Number(document.querySelector(".score").textContent);
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  document.querySelector("input").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start Guessing...";
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".highscore").textContent = maximum;
});
document.querySelector(".check").addEventListener("click", function () {
  const num = Number(document.querySelector("input").value);
  console.log(num, typeof num);
  if (!num) {
    document.querySelector(".message").textContent = "😶 No Number!";
  } else if (num === secretNumber) {
    document.querySelector(".message").textContent = "😃 Correct Number !";
    document.querySelector("body").style.backgroundColor = "#00FF00";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score >= maximum) {
      maximum = score;
    }
    document.querySelector(".highscore").textContent = maximum;
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        num < secretNumber ? "🔻 Too Low" : "🚀 Too High!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});
