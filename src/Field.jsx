import { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Field.css";

function Field({ userField }) {
  const [innerWidth, setInnerWidth] = useState(calcSize());
  function calcSize() {
    switch (true) {
      case window.innerWidth > 800:
        return 700;
      case window.innerWidth > 700:
        return 600;
      case window.innerWidth > 600:
        return 500;
      default:
        return 400;
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(calcSize());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
            innerWidth={innerWidth}
          />
        );
      }
      field.push(
        <div
          className="yLine"
          style={{ minHeight: innerWidth / fieldSize }}
          key={y}
        >
          {yLine}
        </div>
      );
    }

    return field;
  }
  return <div className="field">{updateField()}</div>;
}
export default Field;
