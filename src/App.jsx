import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import { feldgenerator } from "./feldgenerator";
import Field from "./Field";
import Smile from "./Smile";

function App() {
  const [gameStatus, setGameStatus] = useState("in process");
  const [size, setSize] = useState(0);
  const [mines, setMines] = useState(0);

  const [field, setField] = useState([]);
  const [userField, setUserField] = useState([]);

  const [alert, setAlert] = useState("");

  const startGame = () => {
    const inputSize = document.getElementById("size").value;
    const inputMines = document.getElementById("mines").value;
    if (inputSize < 1 || inputSize > 20) {
      setAlert("Size must be between 1 and 20");
      return;
    }
    if (inputMines < 1) {
      setAlert("Mines must be greater than 0");
      return;
    }
    if (inputMines > inputSize ** 2 - 1) {
      setAlert("Mines must be less than size");
      return;
    }

    setSize(inputSize);
    setMines(inputMines);
    setAlert("");

    const notForUser = false;
    const forUser = true;
    setField(feldgenerator(inputMines, inputSize, notForUser));
    setUserField(feldgenerator(inputMines, inputSize, forUser));
    setGameStatus("in process");
  };

  return (
    <>
      <div>
        <Smile status={gameStatus} />
        <img src={logo} className="logo" alt="logo" />
      </div>
      <h1>Hi, it's a sapper game.</h1>
      <h3>
        Pick what size field (max 20) you want and how many mines you want.
      </h3>
      <div className="form">
        <div>
          <label htmlFor="size">Size: </label>
          <input type="number" id="size" name="size" />
        </div>
        <div>
          <label htmlFor="mines">Mines: </label>
          <input type="number" id="mines" name="mines" />
        </div>
        <div>
          <button onClick={startGame}>Start</button>
        </div>
      </div>
      <div className="alert">{alert}</div>
      <Field userField={userField} field={field} />
    </>
  );
}

export default App;
