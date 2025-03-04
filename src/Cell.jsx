import "./Cell.css";

function Cell({ value, fieldSize, onClick }) {
  const renderCell = () => {
    const minWidth = 800 / fieldSize;
    switch (value) {
      case " ":
        return (
          <div
            className="notOpenCell"
            style={{ minWidth: minWidth }}
            onClick={onClick}
          ></div>
        );
    }
  };

  return renderCell();
}
export default Cell;
