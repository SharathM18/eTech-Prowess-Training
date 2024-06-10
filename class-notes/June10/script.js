const cells = document.querySelectorAll(".cell");
const msg = document.querySelector(".msg");
const moveTrack = document.querySelector(".move-tracker");

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let player = true;
let count = 0;
let moveTracker = [];

document.querySelector(".x-turn").addEventListener("click", () => {
  player = true;
});

document.querySelector(".o-turn").addEventListener("click", () => {
  player = false;
});

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (player) {
      cell.innerHTML = "X";
      player = false;
    } else {
      cell.innerHTML = "O";
      player = true;
    }

    moveTracker.push(cell.innerHTML);

    cell.disabled = true;

    count = count + 1;

    if (count === 9) {
      showDraw();
    }

    checkWinner();
    moveTrackerDisplay();
  });
});

const showDraw = () => {
  msg.innerHTML = "Game Draw";
};

const checkWinner = () => {
  for (const pattern of winPattern) {
    let [a, b, c] = pattern;
    if (
      cells[a].innerHTML &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[b].innerHTML === cells[c].innerHTML
    ) {
      showWinner(cells[a].innerHTML);
    }
  }
};

const showWinner = (res) => {
  msg.innerHTML = `Congratulations, the winner is ${res}`;
  allCellsDisabled();
};

const allCellsDisabled = () => {
  cells.forEach((cell) => {
    cell.disabled = true;
  });
};

const allCellsEnabled = () => {
  cells.forEach((cell) => {
    cell.disabled = false;
  });
};

const reset = () => {
  count = 0;
  msg.innerHTML = "";
  player = true;
  cells.forEach((cell) => {
    cell.innerHTML = "";
    allCellsEnabled();
  });

  while (moveTrack.hasChildNodes()) {
    moveTrack.removeChild(moveTrack.firstChild);
  }

  moveTracker = [];
};
document.querySelector(".reset").addEventListener("click", reset);

document.querySelector(".newgame").addEventListener("click", reset);

const moveTrackerDisplay = () => {
  moveTrack.innerHTML = "";

  moveTracker.map((ele, idx) => {
    const moveElem = document.createElement("p");
    moveElem.innerHTML = `Step ${idx + 1} move: ${ele}`;
    moveTrack.appendChild(moveElem);
  });
};
