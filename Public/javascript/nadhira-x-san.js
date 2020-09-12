let humanScoreResult = 0;
let botScoreResult = 0;

let humanScore = document.querySelector("#humanScore");
let botScore = document.querySelector("#botScore");
let winLoseDrawStatus = document.querySelector(".win-lose-draw-status");
let winLoseDrawText = document.getElementById("wldText");
let humanButtonChoose = document.getElementsByClassName("human-button-choose");

let humanSelect = document.getElementsByName("buttonHuman");

let humanChooseRock = document.getElementById("buttonHumanHandRock");
let humanChoosePaper = document.getElementById("buttonHumanHandPaper");
let humanChooseScissors = document.getElementById("buttonHumanHandScissors");

let visibleStartMan = document.getElementById("humanHandStart");
let visibleRockMan = document.getElementById("humanHandRock");
let visiblePaperMan = document.getElementById("humanHandPaper");
let visibleScissorsMan = document.getElementById("humanHandScissors");

let visibleStartBot = document.getElementById("botHandStart");
let visibleRockBot = document.getElementById("botHandRock");
let visiblePaperBot = document.getElementById("botHandPaper");
let visibleScissorsBot = document.getElementById("botHandScissors");

// Emoji Face Bot
let botFaceChange = document.getElementById("botFace");

var botFaceData = [
  "/assets/images/bot-draw-face.png",
  "/assets/images/bot-lose-face.png",
  "/assets/images/bot-win-face.png",
];

let newRound = document.querySelector(".new-round-button");

let getBotChoice = ["Rock", "Paper", "Scissors"];

for (let i = 0; i < 3; i++) {
  humanButtonChoose[i].addEventListener("click", startGame);
}

newRound.addEventListener("click", getNewRound);

function startGame(event) {
  let manselect = event.currentTarget.getAttribute("value");
  let botrandomselect = Math.floor(Math.random() * getBotChoice.length);

  let result = whoIsWin(manselect, getBotChoice[botrandomselect]);

  if (result === "You") {
    humanScoreResult++;
    result += " Win";
    botFaceChange.src = botFaceData[1];
  }

  if (result === "Bot") {
    botScoreResult++;
    result += " Win";
    botFaceChange.src = botFaceData[2];
  }

  if (result === "Draw") {
    result = "Draw";
    botFaceChange.src = botFaceData[0];
  }

  console.log(
    `Human Select ${manselect} and Bot Select ${getBotChoice[botrandomselect]}`
  );
  console.log("Result Game: " + result);
  console.log("Score For Human: " + humanScoreResult);
  console.log("Score For Bot: " + botScoreResult);

  winLoseDrawText.innerHTML = result;
  humanScore.innerHTML = humanScoreResult;
  botScore.innerHTML = botScoreResult;
}

function whoIsWin(human, bot) {
  if (human === bot) {
    return "Draw";
  }

  if (human === "Rock") {
    if (bot === "Scissors") {
      return "You";
    } else {
      return "Bot";
    }
  }

  if (human === "Paper") {
    if (bot === "Rock") {
      return "You";
    } else {
      return "Bot";
    }
  }

  if (human === "Scissors") {
    if (bot === "Paper") {
      return "You";
    } else {
      return "Bot";
    }
  }
}

function getNewRound() {
  // sessionStorage.clear(botScore, humanScore, winLoseDrawText);
  // botScore === botScore;
  // humanScore === humanScore;
  // winLoseDrawText === winLoseDrawText;
  location.reload();
  // window.top.location = window.top.location;
  // console.clear();
  // res.update("page_element", "../Views/parts/section-game.ejs", "");
}
