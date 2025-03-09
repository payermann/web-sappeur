import { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Field.css";
import { checkMine } from "./checkmine";
import { checkFlag } from "./checkflag";
import _ from "lodash";

function Field({ userField, field, start, setStart }) {
  const [innerWidth, setInnerWidth] = useState(calcSize());
  const [updatedUserField, setUpdatedUserField] = useState(userField);
  const [counterFlag, setCounterFlag] = useState(0);
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
    if (start) {
      setUpdatedUserField(userField);
      setCounterFlag(0);
      setStart(false);
    }
  }, [start, userField, setStart, setCounterFlag]);
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(calcSize());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function handleCellClick(y, x, eventType = "leftClick") {
    const newUserField = _.cloneDeep(updatedUserField);
    if (eventType == "rightClick") {
      newUserField[y][x] = checkFlag(newUserField, y, x);
      const newCounterFlag =
        newUserField[y][x] == " " ? counterFlag - 1 : counterFlag + 1;
      setUpdatedUserField(newUserField);
      setCounterFlag(newCounterFlag);
      return;
    }
  }
  function updateField() {
    const fieldSize = updatedUserField.length;
    const field = [];
    for (let y = 0; y < fieldSize; y++) {
      const yLine = [];
      for (let x = 0; x < updatedUserField[y].length; x++) {
        yLine.push(
          <Cell
            key={`${y}-${x}`}
            value={updatedUserField[y][x]}
            fieldSize={fieldSize}
            onClick={() => handleCellClick(y, x)}
            onContextMenu={(event) => {
              event.preventDefault();
              handleCellClick(y, x, "rightClick");
            }}
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
  return (
    <div>
      <div className="field">{updateField()}</div>
      <h2>{counterFlag} 🚩</h2>
    </div>
  );
}
export default Field;
