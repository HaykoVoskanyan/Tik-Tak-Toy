let spanWho = document.getElementById("spanWho");
let blockItem = document.querySelectorAll(".blockItem");
let blockWinner = document.getElementById("blockWinner");
let spanWinner = document.getElementById("spanWinner");
let btnNewGame = document.getElementById("btnNewGame");
let blockArea = document.getElementById("blockArea");
let step = "";
let winner = "";

const who = () => {
  if (step === "circle") {
    step = "krest";
    spanWho.innerText = "Player 2 to move";
  } else {
    step = "circle";
    spanWho.innerText = "Player 1 to move";
  }
};
who();

let counter = 0;

blockItem.forEach((elm) => {
  let clicked = false;
  elm.addEventListener("click", () => {
    if (
      !elm.classList.contains("circle") &&
      !elm.classList.contains("krest") &&
      !clicked 
    ) {
      elm.classList.add(step);
      if (step === "krest") {
        elm.innerText = "X";
      }
      if (step === "circle") {
        elm.innerText = "O";
      }
      clicked = true; 
      counter++;
      who();
      circleWin();
      krestWin();
      noWin();
    }
  });
});
let win = [[0, 1, 2],[0, 4, 8],[2, 4, 6],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],];

let circleWin = () => {
  for (let i = 0; i < win.length; i++) {
    if (
      blockItem[win[i][0]].classList.contains("circle") &&
      blockItem[win[i][1]].classList.contains("circle") &&
      blockItem[win[i][2]].classList.contains("circle")
    ) {
      blockItem[win[i][0]].classList.add("winColor");
      blockItem[win[i][1]].classList.add("winColor");
      blockItem[win[i][2]].classList.add("winColor");

      winner = "Player 1 ";
      endGame(winner);
      return 1;
    }
  }
};

let krestWin = () => {
  for (let i = 0; i < win.length; i++) {
    if (
      blockItem[win[i][0]].classList.contains("krest") &&
      blockItem[win[i][1]].classList.contains("krest") &&
      blockItem[win[i][2]].classList.contains("krest")
    ) {
      blockItem[win[i][0]].classList.add("winColor");
      blockItem[win[i][1]].classList.add("winColor");
      blockItem[win[i][2]].classList.add("winColor");

      winner = "Player 2";
      endGame(winner);
      return 1;
    }
  }
};

let noWin = () => {
  if (!krestWin() && !circleWin() && counter >= 9) {
    winner = "No winner found";
    endGame(winner);
  }
};

let endGame = (winner) => {
  blockArea.style.pointerEvents = "none";
  blockWinner.style.display = "flex";
  spanWinner.innerText = winner;
};
btnNewGame.addEventListener("click", () => {
  document.location.reload();
});

let hideBtn = document.getElementById("hideBtn");
let ulId = document.getElementById("ulId");

hideBtn.addEventListener("click", (e) => {
  ulId.classList.toggle("popUpActive");
});
