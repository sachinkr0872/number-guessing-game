let secretNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

const input = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

document.getElementById("checkBtn").onclick = function () {
  const guess = Number(input.value);

  if (!guess) {
    message.textContent = "⛔ Enter a number!";
    return;
  }

  attempts++;
  attemptsText.textContent = attempts;

  if (guess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
    document.body.style.background = "rgb(42, 102, 42)";
  } else if (guess > secretNumber) {
    message.textContent = "📉 Too high!";
  } else {
    message.textContent = "📈 Too low!";
  }
};

document.getElementById("resetBtn").onclick = function () {
  secretNumber = Math.floor(Math.random() * 50) + 1;
  attempts = 0;
  attemptsText.textContent = 0;
  message.textContent = "Start guessing...";
  input.value = "";
  document.body.style.background = "rgb(23, 23, 49)";
};
