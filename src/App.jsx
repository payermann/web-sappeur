import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [size, setSize] = useState(0);
  const [mines, setMines] = useState(0);

  const startGame = () => {
    setSize(document.getElementById("size").value);
    setMines(document.getElementById("mines").value);
  };

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <h1>Hi, it's a sapper game.</h1>
      <h3>Pick what size field you want and how many mines you want.</h3>
      <div class="form">
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
      <div>
        <h3>Size: {size}</h3>
        <h3>Mines: {mines}</h3>
      </div>
    </>
  );
}

export default App;
