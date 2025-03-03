export function check_mine(feld, y, x) {
  let counter = 0;
  for (let iy = y - 1; iy <= y + 1; iy++) {
    for (let ix = x - 1; ix <= x + 1; ix++) {
      if (iy < 0 || iy >= feld.length || ix < 0 || ix >= feld[iy].length) {
        continue;
      }
      if (feld[iy][ix] === true) {
        counter++;
      }
    }
  }
  return counter;
}
