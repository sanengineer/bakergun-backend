let humanScoreResult = 0
let botScoreResult = 0

let humanScore = document.querySelector("#humanScore");
let botScore = document.querySelector("#botScore");
let winLoseDrawStatus = document.querySelector(".win-lose-draw-status");
let humanButtonChoose = document.getElementsByClassName(".human-button-choose");

let humanChooseRock = document.getElementById("humanButtonHandRock");
let humanChoosePaper = document.getElementById("humanButtonHandPaper");
let humanChooseScissors = document.getElementById("humanButtonHandScissors");

let visibleStartMan = document.getElementById("humanHandStart");
let visibleRockMan = document.getElementById("humanHandRock");
let visiblePaperMan = document.getElementById("humanHandPaper");
let visibleScissorsMan = document.getElementById("humanHandScissors");

let visibleStartBot = document.getElementById("botHandStart");
let visibleRockBot = document.getElementById("botHandRock");
let visiblePaperBot = document.getElementById("botHandPaper");
let visibleScissorsBot = document.getElementById("botHandScissors");

let newRound = document.querySelector(".new-round-button");