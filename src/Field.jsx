import Cell from "./Cell";
import "./Field.css";

function Field({ userField }) {
  function handleCellClick(y, x) {
    console.log(`click! (${y}, ${x})`);
  }
  function updateField() {
    const fieldSize = userField.length;
    const field = [];
    for (let y = 0; y < fieldSize; y++) {
      const yLine = [];
      for (let x = 0; x < userField[y].length; x++) {
        yLine.push(
          <Cell
            key={`${y}-${x}`}
            value={userField[y][x]}
            fieldSize={fieldSize}
            onClick={() => handleCellClick(y, x)}
          />
        );
      }
      field.push(
        <div className="yLine" style={{ minHeight: 800 / fieldSize }} key={y}>
          {yLine}
        </div>
      );
    }

    return field;
  }
  return <div className="field">{updateField()}</div>;
}
export default Field;
