// Assets Codigan Javascipt ini tidak dipakai, cuma sekedar dokumentasi sejarah saja

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

let botNodeList = document.querySelectorAll(".bot-hand-choice");

let addClassVisibilityBot = document.querySelectorAll(".visibility-bot-hand");

document
  .getElementById("humanButtonHandRock")
  .addEventListener("click", visibleRockHuman);

document
  .getElementById("humanButtonHandPaper")
  .addEventListener("click", visiblePaperHuman);

document
  .getElementById("humanButtonHandScissors")
  .addEventListener("click", visibleScissorsHuman);

document
  .getElementById("newRoundButton")
  .addEventListener("click", newRoundFunc);

function visibleRockHuman() {
  visibleRockMan.classList.add("visibility-human-hand");
  visibleStartMan.style.display = "none";
  visibleStartBot.style.display = "none";
  botNodeList[Math.floor(Math.random() * 3)].style.display = "block";
}

function visiblePaperHuman() {
  visiblePaperMan.classList.add("visibility-human-hand");
  visibleStartMan.style.display = "none";
  visibleStartBot.style.display = "none";
  botNodeList[Math.floor(Math.random() * 3)].style.display = "block";
}

function visibleScissorsHuman() {
  visibleScissorsMan.classList.add("visibility-human-hand");
  visibleStartMan.style.display = "none";
  visibleStartBot.style.display = "none";
  botNodeList[Math.floor(Math.random() * 3)].style.display = "block";
}

function newRoundFunc() {
  visibleStartMan.style.display = "block";
  visibleRockMan.classList.remove("visibility-human-hand");
  visiblePaperMan.classList.remove("visibility-human-hand");
  visibleScissorsMan.classList.remove("visibility-human-hand");

  visibleStartBot.style.display = "block";
  visibleRockBot.style.display = "none";
  visiblePaperBot.style.display = "none";
  visibleScissorsBot.style.display = "none";
}
