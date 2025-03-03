import { Feldgenerator } from "./feldgenerator.js";
import { check_mine } from "./checkmine.js";
import { question, questionInt } from "readline-sync";
import { checkFlag } from "./checkflag.js";
import { checkWin } from "./checkwin.js";

let size;
let mines_number;

console.log("hi, welcome to sapeur game");

do {
  size = questionInt("What size do you want for the field? ");
  if (size < 2) {
    console.log("Size is too small");
  }
} while (size < 2);

do {
  mines_number = questionInt("How many mines do you want? ");
  if (mines_number >= size * size) {
    console.log("Too many mines");
  } else if (mines_number < 0) {
    console.log("Too few mines");
  }
} while (mines_number >= size * size || mines_number < 0);

const not_for_user = false;
const for_user = true;

const feld = Feldgenerator(mines_number, size, not_for_user);
const user_feld = Feldgenerator(mines_number, size, for_user);

// console.table(feld);
console.table(user_feld);

let x;
let y;
while (true) {
  const yx = question("y and x for open 'y x', or '+ y x' for flag > ").split(
    " "
  );
  if (yx[0] === "+") {
    x = parseInt(yx[2]);
    y = parseInt(yx[1]);
    user_feld[y][x] = checkFlag(user_feld, y, x);
  } else {
    x = parseInt(yx[1]);
    y = parseInt(yx[0]);

    if (feld[y][x] === true && user_feld[y][x] !== "!FLAG!") {
      feld[y][x] = "!TRUE!";
      console.table(feld);
      console.log("Game over");
      break;
    }
    if (user_feld[y][x] === "!FLAG!") {
      console.log("You can't open this cell, weil it's flagged");
      continue;
    } else {
      user_feld[y][x] = check_mine(feld, y, x);
    }
  }

  if (user_feld[y][x] === 0) {
    for (let i = y - 1; i <= y + 1; i++) {
      for (let j = x - 1; j <= x + 1; j++) {
        if (i >= 0 && i < size && j >= 0 && j < size) {
          user_feld[i][j] = check_mine(feld, i, j);
        }
      }
    }
  }

  console.table(user_feld);
  if (checkWin(user_feld, feld)) {
    console.log("You win");
    console.table(feld);
    break;
  }
}
