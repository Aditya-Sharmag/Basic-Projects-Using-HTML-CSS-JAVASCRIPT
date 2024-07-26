let scoreStr = localStorage.getItem("Score");
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  localStorage.clear();
  document.querySelector(".js-moves").innerHTML = ``;
  document.querySelector(".js-result").innerHTML = ``;
  document.querySelector(".js-score").innerHTML = ``;

  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        wins: 0,
        losses: 0,
        ties: 0,
      };

  score.displayScore = function () {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Score:Won:${score.wins}, Lost:${score.losses}, Tie: ${score.ties}`;
  };
}

function decideComputerMove() {
  let computerMove = "";
  let i = Math.random();
  if (i >= 0 && i < 1 / 3) {
    computerMove = "rock";
  } else if (i >= 1 / 3 && i < 2 / 3) {
    computerMove = "paper";
  } else if (i >= 2 / 3 && i < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function playGame(userMove) {
  let result = "";
  let computerMove = decideComputerMove();
  // If computer and user moves are same
  if (userMove == computerMove) {
    result = "Tie";
  } else if (userMove == "rock" && computerMove == "paper") {
    result = "You loose";
  } else if (userMove == "rock" && computerMove == "scissors") {
    result = "You win";
  } else if (userMove == "paper" && computerMove == "scissors") {
    result = "You loose";
  } else if (userMove == "paper" && computerMove == "rock") {
    result = "You win";
  } else if (userMove == "scissors" && computerMove == "rock") {
    result = "You loose";
  } else if (userMove == "scissors" && computerMove == "paper") {
    result = "You win";
  }
  if (result == "Tie") {
    score.ties++;
  } else if (result == "You loose") {
    score.losses++;
  } else if (result == "You win") {
    score.wins++;
  }
  localStorage.setItem(`Score`, JSON.stringify(score));
  document.querySelector(
    ".js-moves"
  ).innerHTML = `Your Move: ${userMove} , Computer Move: ${computerMove}`;
  document.querySelector(".js-result").innerHTML = `${result}`;
  score.displayScore();
}
