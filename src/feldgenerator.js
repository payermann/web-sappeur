export function feldgenerator(mines_number, size, for_user) {
  let field = [];

  for (let y = 0; y < size; y++) {
    field[y] = [];
    for (let x = 0; x < size; x++) {
      field[y][x] = " ";
    }
  }

  if (for_user) {
    return field;
  }

  let mines = 0;
  while (mines < mines_number) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);

    if (field[y][x] === " ") {
      field[y][x] = true;
      mines++;
    }
  }

  return field;
}
