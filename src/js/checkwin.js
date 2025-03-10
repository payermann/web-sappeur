export function checkWin(user_feld, feld) {
  let win = true;
  for (let y_line = 0; y_line < user_feld.length; y_line++) {
    for (let x_line = 0; x_line < user_feld[y_line].length; x_line++) {
      if (user_feld[y_line][x_line] === " " && feld[y_line][x_line] !== true) {
        win = false;
      }
    }
  }
  return win;
}
