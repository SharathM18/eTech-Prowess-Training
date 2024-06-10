const choices = document.querySelectorAll(".choices");

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = e.target.getAttribute("id");
    console.log("user choice:", userChoice);
    playGame(userChoice);
  });
});

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const optionsIndex = Math.floor(Math.random() * options.length);
  console.log("computer choice:", options[optionsIndex]);
  return options[optionsIndex];
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = computerChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, computerChoice);
  }
};

const drawGame = () => {
  console.log("Game Draw");
  document.querySelector(
    ".msg"
  ).innerHTML = `It's a draw! Both chose the same option.`;
  document.querySelector(".msg").style.color = "orange";
};

let userCount = 0;
let computerCount = 0;

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    console.log("user wins");
    userCount = userCount + 1;
    document.querySelector(".user-score").innerHTML = userCount;
    document.querySelector(
      ".msg"
    ).innerHTML = `Congratulations! You win! ${userChoice} beats ${computerChoice}.`;
    document.querySelector(".msg").style.color = "green";
  } else {
    console.log("computer wins");
    computerCount = computerCount + 1;
    document.querySelector(".computer-score").innerHTML = computerCount;
    document.querySelector(
      ".msg"
    ).innerHTML = `Oops! You lose! ${computerChoice} beats ${userChoice}.`;
    document.querySelector(".msg").style.color = "red";
  }
};
