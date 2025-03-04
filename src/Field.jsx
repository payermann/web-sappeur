import Cell from "./Cell";

function Field({ userField }) {
  function updateField() {
    console.log(userField);
    const field = [];
    for (let y = 0; y < userField.length; y++) {
      const yLine = [];
      for (let x = 0; x < userField[y].length; x++) {
        yLine.push(<Cell key={`${y}-${x}`} value={userField[y][x]} />);
      }
      field.push(
        <div key={y}>
          <h2>{y}</h2>
          {yLine}
        </div>
      );
    }
    return field;
  }
  return <div>{updateField()}</div>;
}
export default Field;
