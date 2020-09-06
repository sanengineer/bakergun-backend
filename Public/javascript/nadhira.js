let humanScore = document.querySelector("#humanScore");
let botScore = document.querySelector("#botScore");
let winLoseDrawStatus = document.querySelector("#winLoseDrawStatus");
let humanButtonChoose = document.querySelectorAll(".human-button-choose");

let winner = [0, 0];
let botChoices = ["Rock", "Paper", "Scissors"];

for (let i = 0; i < humanButtonChoose.length; i++) {
  humanButtonChoose[i].addEventListener("click", startGame);
}

function startGame(e) {
  let humanChoose = e.target.getAttribute("value");
  let botChooseRandom = Math.floor(Math.random() * botChoices.length);
  let result = whoIsWin(humanChoose, botChoices[botChooseRandom]);

  if (result === "Human") {
    winner[0]++;
    result += "1 Wins";
  }

  if (result === "Bot") {
    winner[0]++;
    result += "1 Wins";
  }

  if (result === "Draw") {
    result = "Draw";
  }

  console.log(result);
  console.log(winner);
  humanScore.innerHTML = winner[0];
  botScore.innerHTML = winner[1];
  winLoseDrawStatus = result;
}

function setWinLoseDrawStatus(selectionWinLoseDraw) {
  winLoseDrawStatus.style.background = "green";
}

function whoIsWin(human, bot) {
  if (human === bot) {
    return "Draw";
  }

  if (human === "Rock") {
    if (bot === "Scissors") {
      return "Human";
    } else {
      return "Bot";
    }
  }

  if (human === "Scissors") {
    if (bot === "Paper") {
      return "Human";
    } else {
      return "Bot";
    }
  }

  if (human === "Paper") {
    if (bot === "Rock") {
      return "Human";
    } else {
      return "Bot";
    }
  }
}
