export function checkFlag(user_feld, y, x) {
  if (user_feld[y][x] === "!FLAG!") {
    user_feld[y][x] = " ";
  } else {
    user_feld[y][x] = "!FLAG!";
  }
  return user_feld[y][x];
}
