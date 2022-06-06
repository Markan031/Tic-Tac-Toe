let btn = document.getElementById("btn");

let gridItems = document.getElementsByClassName("grid-item");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let winnerP = document.getElementById("winnerP");
let drawP = document.getElementById("drawP");

let gamestate = [];
let states = false;

let draw = "draw";
let xWin = "X is the winner!";
let oWin = "O is the winner!";

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", () => {
    if (!states) {
      gridItems[i].innerText = "X";
      gridItems[i].classList.add("disabled");
      gamestate.push(i);
      states = true;
    } else {
      gridItems[i].innerText = "O";
      gridItems[i].classList.add("disabled");
      states = false;
      gamestate.push(i);
    }

    if (
      (one.innerText == "X" &&
        two.innerText == "X" &&
        three.innerText == "X") ||
      (four.innerText == "X" &&
        five.innerText == "X" &&
        six.innerText == "X") ||
      (seven.innerText == "X" &&
        eight.innerText == "X" &&
        nine.innerText == "X") ||
      (one.innerText == "X" &&
        four.innerText == "X" &&
        seven.innerText == "X") ||
      (two.innerText == "X" &&
        five.innerText == "X" &&
        eight.innerText == "X") ||
      (three.innerText == "X" &&
        six.innerText == "X" &&
        nine.innerText == "X") ||
      (one.innerText == "X" &&
        five.innerText == "X" &&
        nine.innerText == "X") ||
      (seven.innerText == "X" &&
        five.innerText == "X" &&
        three.innerText == "X")
    ) {
      console.log("X IS THE WINNER!");
      winnerP.innerText = xWin;
      winnerP.style.padding = "20px";
      let newGameBtn = document.createElement("button");
      let btnText = document.createTextNode("New Game");
      newGameBtn.appendChild(btnText);
      btn.appendChild(newGameBtn);
      for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.add("disabled");
      }

      newGameBtn.addEventListener("click", () => {
        window.location.reload();
      });
    }
    if (
      (one.innerText == "O" &&
        two.innerText == "O" &&
        three.innerText == "O") ||
      (four.innerText == "O" &&
        five.innerText == "O" &&
        six.innerText == "O") ||
      (seven.innerText == "O" &&
        eight.innerText == "O" &&
        nine.innerText == "O") ||
      (one.innerText == "O" &&
        four.innerText == "O" &&
        seven.innerText == "O") ||
      (two.innerText == "O" &&
        five.innerText == "O" &&
        eight.innerText == "O") ||
      (three.innerText == "O" &&
        six.innerText == "O" &&
        nine.innerText == "O") ||
      (one.innerText == "O" &&
        five.innerText == "O" &&
        nine.innerText == "O") ||
      (seven.innerText == "O" &&
        five.innerText == "O" &&
        three.innerText == "O")
    ) {
      console.log("O IS THE WINNER!");
      winnerP.innerText = oWin;
      winnerP.style.padding = "20px";
      let newGameBtn = document.createElement("button");
      let btnText = document.createTextNode("New Game");
      newGameBtn.appendChild(btnText);
      btn.appendChild(newGameBtn);
      for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.add("disabled");
      }

      newGameBtn.addEventListener("click", () => {
        window.location.reload();
      });
    }
    if (winnerP.innerText == "" && gamestate.length == 9) {
      drawP.innerText = draw;
      drawP.style.padding = "20px";
      let newGameBtn = document.createElement("button");
      let btnText = document.createTextNode("New Game");
      newGameBtn.appendChild(btnText);
      btn.appendChild(newGameBtn);

      newGameBtn.addEventListener("click", () => {
        window.location.reload();
      });
    }
  });
}
