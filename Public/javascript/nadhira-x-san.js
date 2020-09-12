// Object HTML
let humanScore = document.querySelector("#humanScore");
let botScore = document.querySelector("#botScore");
let winLoseDrawStatus = document.querySelector(".win-lose-draw-status");
let winLoseDrawText = document.getElementById("wldText");
let bgChangeStatusWsl = document.getElementById("wslCardBody");
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

let humanScoreResult = 0;
let botScoreResult = 0;

// Emoji Face Bot
let botFaceChange = document.getElementById("botFace");
var botFaceData = [
  "/assets/images/bot-face-start.png",
  "/assets/images/bot-lose-face.png",
  "/assets/images/bot-win-face.png",
  "/assets/images/bot-draw-face.png",
];

var hand = [
  "/assets/images/human-start-hand.png",
  "/assets/images/rock-hand.png",
  "/assets/images/paper-hand.png",
  "/assets/images/scissors-hand.png",
  "/assets/images/bot-start-hand.png",
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

    setTimeout(() => {
      winLoseDrawText.innerHTML = result;
      bgChangeStatusWsl.style.background =
        "linear-gradient(179.82deg, #51FE00 -53.62%, #42CA02 62.43%, #2A8300 176.1%)";
      botFaceChange.src = botFaceData[1];
      setTimeout(() => {
        winLoseDrawText.innerHTML = "...";
        bgChangeStatusWsl.style.background =
          "linear-gradient(148.43deg, #676767 -1.04%, rgba(103, 103, 103, 0.395833) 60.25%, rgba(103, 103, 103, 0.34) 120.28%)";
        botFaceChange.src = botFaceData[0];
      }, 750);
    }, 12);
  }

  if (result === "Bot") {
    botScoreResult++;
    result += " Win";

    setTimeout(() => {
      winLoseDrawText.innerHTML = result;
      bgChangeStatusWsl.style.background =
        "linear-gradient(180deg, rgba(155, 0, 0, 0.86) 7.81%, #F05050 89.58%)";
      botFaceChange.src = botFaceData[2];
      setTimeout(() => {
        winLoseDrawText.innerHTML = "...";
        bgChangeStatusWsl.style.background =
          "linear-gradient(148.43deg, #676767 -1.04%, rgba(103, 103, 103, 0.395833) 60.25%, rgba(103, 103, 103, 0.34) 120.28%)";
        botFaceChange.src = botFaceData[0];
      }, 750);
    }, 12);
  }

  if (result === "Draw") {
    result = "Draw";

    setTimeout(() => {
      winLoseDrawText.innerHTML = result;
      bgChangeStatusWsl.style.background =
        "linear-gradient(180deg, rgba(255, 171, 9, 0.86) 7.81%, #A56D01 89.58%)";
      botFaceChange.src = botFaceData[3];
      setTimeout(() => {
        winLoseDrawText.innerHTML = "...";
        bgChangeStatusWsl.style.background =
          "linear-gradient(148.43deg, #676767 -1.04%, rgba(103, 103, 103, 0.395833) 60.25%, rgba(103, 103, 103, 0.34) 120.28%)";
        botFaceChange.src = botFaceData[0];
      }, 750);
    }, 12);
  }

  if (manselect === "Rock") {
    setTimeout(() => {
      visibleStartMan.src = hand[1];
      setTimeout(() => {
        visibleStartMan.src = hand[0];
      }, 750);
    }, 12);
  }

  if (manselect === "Paper") {
    setTimeout(() => {
      visibleStartMan.src = hand[2];
      setTimeout(() => {
        visibleStartMan.src = hand[0];
      }, 750);
    }, 12);
  }

  if (manselect === "Scissors") {
    setTimeout(() => {
      visibleStartMan.src = hand[3];
      setTimeout(() => {
        visibleStartMan.src = hand[0];
      }, 750);
    }, 12);
  }

  if (getBotChoice[botrandomselect] === "Rock") {
    setTimeout(() => {
      visibleStartBot.src = hand[1];
      setTimeout(() => {
        visibleStartBot.src = hand[4];
      }, 750);
    }, 12);
  }

  if (getBotChoice[botrandomselect] === "Paper") {
    setTimeout(() => {
      visibleStartBot.src = hand[2];
      setTimeout(() => {
        visibleStartBot.src = hand[4];
      }, 750);
    }, 12);
  }

  if (getBotChoice[botrandomselect] === "Scissors") {
    setTimeout(() => {
      visibleStartBot.src = hand[3];
      setTimeout(() => {
        visibleStartBot.src = hand[4];
      }, 750);
    }, 12);
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
  location.reload();
}
