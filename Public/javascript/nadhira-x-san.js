let humanScoreResult = 0
let botScoreResult = 0

let humanScore = document.querySelector("#humanScore");
let botScore = document.querySelector("#botScore");
let winLoseDrawStatus = document.querySelector(".win-lose-draw-status");
let humanButtonChoose = document.getElementsByClassName("human-button-choose");

// let humanButtonChoose = document.querySelectorAll("button.human-button-choose");

let humanSelect = document.getElementsByName("buttonHuman")

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

let newRound = document.querySelector(".new-round-button");

for (let i = 0; i < 3; i++) {
  humanButtonChoose[i].addEventListener("click", startGame);
}

function startGame(event){
  const x = event.currentTarget.getAttribute("value");
  console.log("Human Select "+ x);
}