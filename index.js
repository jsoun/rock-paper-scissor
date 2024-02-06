const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const message = document.querySelector("#message");

const signs = ["🪨", "📄", "✂️"];

// game logic, updates message according to outcome
function gameSystem() {
  if (
    (player.textContent === signs[0] && computer.textContent === signs[1]) ||
    (player.textContent === signs[1] && computer.textContent === signs[2]) ||
    (player.textContent === signs[2] && computer.textContent === signs[0])
  ) {
    message.textContent = "You lose this round!";
  } else if (player.textContent === computer.textContent) {
    message.textContent = "It's a tie!";
  } else {
    message.textContent = "You win this round!";
  }
}

// displays the current turns after each button click
const turns = document.querySelector(".turns");
let numTurn = 0;
function increment() {
  numTurn = numTurn + 1;
  turns.textContent = "Current Turn: " + numTurn;
}

// randomizes the computer signs
function computerChoice() {
  const randomSigns = Math.floor(Math.random() * signs.length);
  computer.textContent = signs[randomSigns];
}

// click listeners that activate functions
rock.addEventListener("click", function () {
  player.textContent = signs[0];
  computerChoice();
  gameSystem();
  increment();
});

paper.addEventListener("click", function () {
  player.textContent = signs[1];
  computerChoice();
  gameSystem();
  increment();
});

scissor.addEventListener("click", function () {
  player.textContent = signs[2];
  computerChoice();
  gameSystem();
  increment();
});
