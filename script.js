let boxes = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX,playerO

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      msgcontainer.classList.remove("hide");
    } else {
      box.innerText = "X";
      turnO = true;
      msgcontainer.classList.remove("hide");
    }
    box.disabled = true;
    checkwinner();
  });
});

const disabledbox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (pos) => {
  disabledbox();
  msg.innerText = `congratulations winner is ${pos}`;
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && (pos2 != "") & (pos3 != "")) {
      if (pos1 == pos2 && pos2 == pos3) {
        showWinner(pos1);
      }
    }
  }
};

let resetGame = () => {
  let resetVal = document.querySelector("#reset");
  resetVal.addEventListener("click", () => {

    for (let pattern of winpatterns) {
      let pos1 = (boxes[pattern[0]].innerText = " ");
      let pos2 = (boxes[pattern[1]].innerText = " ");
      let pos3 = (boxes[pattern[2]].innerText = " ");
      msgcontainer.classList.add("hide");
      location.reload();
    }
  });
};
resetGame();

let newGame = () => {
  let resetVal = document.querySelector("#newGame");
  resetVal.addEventListener("click", () => {

    for (let pattern of winpatterns) {
      let pos1 = (boxes[pattern[0]].innerText = " ");
      let pos2 = (boxes[pattern[1]].innerText = " ");
      let pos3 = (boxes[pattern[2]].innerText = " ");
    }
    location.reload();
  });
};

newGame();
